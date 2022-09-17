import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Button, IconButton, Paper, Typography } from '@mui/material'
import { Box, BoxTypeMap, css, Stack, styled } from '@mui/system'
import { lighten } from 'polished'
import {
	addDays,
	endOfMonth,
	formatWithOptions,
	startOfMonth,
	subDays,
} from 'date-fns/fp'
import ptBr from 'date-fns/locale/pt-BR'
import { pipe } from 'fp-ts/function'
import {
	join,
	juxt,
	toUpper,
	head,
	toLower,
	tail,
	compose,
	range,
	omit,
	uniq,
} from 'rambda'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { useLilius } from 'use-lilius'
import { useCallback, useRef, useState, MouseEvent, useEffect } from 'react'
import { useArray, useChangeEffect } from '@excelsia/hooks'
import { LoadingOverlay } from 'common/components'
import { useSetAvailability } from 'doctor/mutations/useSetAvailability'
import Swal from 'sweetalert2'
import { useAuthStore } from 'auth/providers'
import shallow from 'zustand/shallow'
import { UserWithDoctor } from 'user/types'

const tomorrow = addDays(1)
const yesterday = subDays(1)

const datesInBetween = (start: Date, end: Date) => {
	const dates = [start]
	let current = start
	while (current <= end) {
		dates.push(current)
		current = addDays(1)(current)
	}
	return [...dates, end]
}

const titleize = compose(
	join(''),
	juxt([
		compose(toUpper, head) as unknown as SimpleFn<string, string>,
		compose(toLower, tail as SimpleFn<string, string>),
	]),
) as unknown as SimpleFn<string, string>

const getMonth = formatWithOptions({ locale: ptBr }, 'LLLL')
const getMonthFromIndex = (index: number) =>
	pipe(getMonth(new Date(2021, index, 1)), titleize)
const getWeekday = formatWithOptions({ locale: ptBr }, 'EEEEEE')
const getWeekdayFromIndex = (index: number) =>
	pipe(getWeekday(new Date(2021, 0, index + 1)), titleize)

type SimpleFn<P, R> = (param: P) => R

function useMouseDrag({
	onMove = () => {},
	onStart = () => {},
	onStop = () => {},
}: {
	onMove?: (event: MouseEvent<HTMLElement>) => void
	onStart?: (event: MouseEvent<HTMLElement>) => void
	onStop?: (event: MouseEvent<HTMLElement>) => void
}) {
	const [isDragging, setIsDragging] = useState(false)
	const zica = useRef(false)
	const timer = useRef(0)

	const onMouseDown = useCallback(
		<T extends HTMLElement>(event: MouseEvent<T>) => {
			setIsDragging(true)
			timer.current = window.setTimeout(() => {
				zica.current = true
				onStart(event)
			}, 500)
		},
		[onStart],
	)

	const onMouseUp = useCallback(
		<T extends HTMLElement>(event: MouseEvent<T>) => {
			window.clearTimeout(timer.current)
			onStop(event)
			zica.current = false
			setIsDragging(false)
		},
		[onStop],
	)

	const onMouseOver = useCallback(
		<T extends HTMLElement>(event: MouseEvent<T>) => {
			if (zica.current) {
				onMove(event)
			}
		},
		[onMove],
	)

	return {
		isDragging,
		handlers: {
			onMouseDown,
			onMouseUp,
			onMouseOver,
		},
	}
}

const DayText = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2rem;
	color: inherit;
	font-weight: 500;
	user-select: none;
`

type DayProps = {
	enabled?: boolean
	selected?: boolean
	nextSelected?: boolean
	previousSelected?: boolean
	selecting?: boolean
	nextSelecting?: boolean
	previousSelecting?: boolean
	hovered?: boolean
	nextHovered?: boolean
	previousHovered?: boolean
}

const Day = styled<OverridableComponent<BoxTypeMap<DayProps>>>(Box)`
	background-color: ${({ theme, selected = false }) =>
		selected && theme.palette.secondary.main} !important;
	color: ${({ theme, selected = false }) =>
		selected && theme.palette.grey[100]} !important;
	&:active,
	&:focus {
		background-color: ${({ theme, enabled = true }) =>
			enabled && theme.palette.secondary.main} !important;
		color: ${({ theme, enabled = true }) =>
			enabled && theme.palette.grey[100]} !important;
	}
	&:hover {
		cursor: ${({ enabled = true }) => enabled && 'pointer'};
		background-color: ${({ theme, enabled = true }) =>
			enabled && lighten(0.2, theme.palette.secondary.main)};
		color: ${({ theme, enabled = true }) =>
			enabled && theme.palette.grey[100]} !important;
	}
	color: ${({ theme }) => theme.palette.grey[400]};
	position: relative;
	box-sizing: border-box;
	text-align: center;
	width: 100%;
	height: 100%;
	${({ selecting = false, theme }) =>
		selecting &&
		css`
			background-color: ${lighten(0.15, theme.palette.secondary.main)};
			color: ${theme.palette.grey[100]} !important;
		`}

	&:before {
		content: '';
		display: block;
		padding-top: 100%;
	}
`

const ensureDay = (target: EventTarget) =>
	(target as HTMLDivElement).closest('.js-day') as HTMLDivElement | undefined

function Calendar({
	onChange,
	initialDates = [],
}: {
	onChange: (dates: Date[]) => void
	initialDates?: Date[]
}) {
	const container = useRef<HTMLDivElement>()
	const {
		calendar,
		inRange,
		isSelected,
		toggle,
		selected,
		viewing,
		viewNextMonth,
		viewPreviousMonth,
		setSelected,
	} = useLilius({ selected: initialDates })

	useChangeEffect(() => {
		onChange(selected)
	}, [selected])

	const [hover, setHover] = useState<Record<string, true>>({})
	const [start, setStart] = useState<Date>()
	const [end, setEnd] = useState<Date>()
	const isSelecting = (date: Date) =>
		start && end
			? inRange(date, start, end) || inRange(date, end, start)
			: false

	const calendrag = useMouseDrag({
		onStop: event => {
			const day = ensureDay(event.target)
			if (day?.dataset.date && start) {
				const newEnd = new Date(day.dataset.date)
				const dates =
					start > newEnd
						? datesInBetween(newEnd, start)
						: datesInBetween(start, newEnd)
				setSelected(uniq([...dates, ...selected]))
				setStart(undefined)
				setEnd(undefined)
			}
		},
		onStart: event => {
			const day = ensureDay(event.target)
			if (day?.dataset.date) {
				setStart(new Date(day.dataset.date.toString()))
			}
		},
		onMove: event => {
			const day = ensureDay(event.target)
			if (day?.dataset.date) {
				setEnd(new Date(day.dataset.date.toString()))
			}
		},
	})

	return (
		<Box maxWidth="765px" width="100%" mb={4}>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="center"
				alignItems="center"
			>
				<Stack direction="row" spacing={2} alignItems="center">
					<IconButton size="large" onClick={viewPreviousMonth}>
						<ChevronLeft />
					</IconButton>
					<Typography variant="h5" fontSize="1.8rem" component="div">
						{getMonthFromIndex(viewing.getMonth())}
					</Typography>
					<IconButton size="large" onClick={viewNextMonth}>
						<ChevronRight />
					</IconButton>
				</Stack>
			</Box>
			<Box
				ref={container}
				id="calendar"
				pl={t => t.spacing(10)}
				pr={t => t.spacing(10)}
				display="grid"
				gridTemplateColumns="repeat(auto-fill, minmax(calc(100% / 7), 1fr))"
				gridAutoFlow="row"
				{...calendrag.handlers}
			>
				{calendar[0][0].map(day => (
					<Typography
						key={day.toString()}
						textAlign="center"
						variant="h6"
						component="div"
						mb={t => t.spacing(1)}
						mt={t => t.spacing(1)}
					>
						{getWeekdayFromIndex(day.getDay())}
					</Typography>
				))}
				{calendar[0].map(week =>
					week.map(day => {
						if (!inRange(day, startOfMonth(viewing), endOfMonth(viewing))) {
							return <Day key={day.toString()} enabled={false} />
						}

						return (
							<Day
								className="js-day"
								onMouseOver={() =>
									setHover({ ...hover, [day.getTime().toString()]: true })
								}
								data-date={day.toString()}
								hovered={hover[day.getTime().toString()]}
								previousHovered={hover[yesterday(day).getTime().toString()]}
								nextHovered={hover[tomorrow(day).getTime().toString()]}
								onMouseOut={() => setHover(omit([day.getTime().toString()]))}
								selecting={isSelecting(day)}
								previousSelecting={isSelecting(yesterday(day))}
								nextSelecting={isSelecting(tomorrow(day))}
								previousSelected={isSelected(yesterday(day))}
								nextSelected={isSelected(tomorrow(day))}
								key={day.toString()}
								selected={isSelected(day)}
								onClick={() => toggle(day)}
							>
								<DayText>{day.getDate()}</DayText>
							</Day>
						)
					}),
				)}
			</Box>
		</Box>
	)
}

export function Availability() {
	const [user, setUser] = useAuthStore(
		state => [state.user as UserWithDoctor, state.setUser],
		shallow,
	)
	const [dates, setDates] = useState<Date[]>(
		user.doctorData.availability.dates.map(d => new Date(d)),
	)
	const hours = useArray<number>(user.doctorData.availability.hours)
	const availability = useSetAvailability({
		onSuccess: ({ result }) => {
			setUser({ ...user, doctorData: result })
			Swal.fire({
				title: 'Sucesso!',
				text: 'Agenda atualizada com sucesso',
				icon: 'success',
			})
		},
		onError: () => {
			Swal.fire({
				title: 'Erro',
				text: 'Não foi possível atualizar sua agenda',
				icon: 'error',
			})
		},
	})

	const handleSubmit = () =>
		availability.mutate({
			dates: dates.map(Number),
			hours: hours.value,
		})

	return (
		<Box sx={{ p: t => t.spacing(4) }}>
			<Paper sx={{ py: 4, px: 8 }}>
				<Typography mb={4} component="div" fontWeight="bold" fontSize="2rem">
					Monte sua agenda
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Calendar onChange={setDates} initialDates={dates} />
					<Stack direction="row" spacing={1.5} mb={4}>
						{range(9, 16).map(hour => (
							<Button
								key={hour}
								variant="contained"
								size="large"
								disableElevation={!hours.includes(hour)}
								onClick={hours.thunk.toggle(hour)}
								color={hours.includes(hour) ? 'primary' : 'gray'}
								sx={{
									borderRadius: 2,
								}}
							>
								{hour}H
							</Button>
						))}
					</Stack>
					<Box mb={2}>
						<Button
							variant="contained"
							color="primary"
							size="xlarge"
							onClick={handleSubmit}
						>
							Confirmar agenda
						</Button>
					</Box>
				</Box>
			</Paper>
			<LoadingOverlay show={availability.isLoading} />
		</Box>
	)
}
