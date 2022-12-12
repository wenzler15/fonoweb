/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable quotes */
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Button, IconButton, Paper, Typography } from '@mui/material'
import { usePatients } from 'patient/queries'
import axios from 'axios'
import { Box, BoxTypeMap, css, Stack, styled } from '@mui/system'
import { lighten } from 'polished'
import { Scheduler } from '@aldabil/react-scheduler';
import ptBR from 'date-fns/locale/pt-BR';
import { NavBar } from 'components/navBar';
import { api } from "../../../services";

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
import { any } from 'rambdax'

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
    onMove = () => { },
    onStart = () => { },
    onStop = () => { },
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
    const [booked, setBooked] = useState([])
    const [patients, setPatients] = useState([])

    const getPatients = async () => {
        const userString = localStorage.getItem('@fonoweb/auth');
        const userJson = JSON.parse(userString)

        const resp = await api.get('/patients', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userJson.state.token}`
            }
        })

        // const resp = await axios.get('http://localhost:8000/patients', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3YzhiYmY2ZC02ZWUyLTQ4MDgtOGEwMi1hNDgwNWNkNTgyNDgiLCJpYXQiOjE2NzA4NjI0MjEsImV4cCI6MTY3MDk0ODgyMX0.rWcgnI4is6gja3ZPUOZjTJoIzYtUnA6dqzF0l7Kfsz0`
        //     }
        // })


        const pacientsResult = resp.data.result;

        const pacientsArray = [];

        pacientsResult.map((item) => {
            pacientsArray.push({
                id: item.id,
                text: `${item.name} - ${item.cpf}`,
                value: item.name
            })
        })

        setPatients(pacientsArray);
    }

    const getAppointments = async () => {
        const userString = localStorage.getItem('@fonoweb/auth');
        const userJson = JSON.parse(userString)

        const resp = await api.get(`/appointments/${userJson.state.user.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userJson.state.token}`
            }
        })

        // const resp = await axios.get('http://localhost:8000/appointments/d7b0cead-63cb-4136-ba6a-02caf8b6bd09', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3YzhiYmY2ZC02ZWUyLTQ4MDgtOGEwMi1hNDgwNWNkNTgyNDgiLCJpYXQiOjE2NzA4NjI0MjEsImV4cCI6MTY3MDk0ODgyMX0.rWcgnI4is6gja3ZPUOZjTJoIzYtUnA6dqzF0l7Kfsz0`
        //     }
        // })

        const appointmentsArray = [];

        resp.data.map((item) => {
            const oldDateObj = new Date(item.when);
            const newDateObj = new Date(item.when);
            newDateObj.setTime(oldDateObj.getTime() + (30 * 60 * 1000));

            appointmentsArray.push({
                event_id: item.id,
                title: item.patient.user.name,
                start: oldDateObj,
                end: newDateObj,
                status: item.status,
                // eslint-disable-next-line unicorn/no-nested-ternary
                color: item.status === "CANCELED" ? '#d45b1e' : (item.status === "SCHEDULED" || item.status === "CONFIRMED" ? '#1e98d4' : item.status === "FINISHED" ? 'green' : '#d10000')
            })
        })

        setBooked(appointmentsArray)
    }

    const handleConfirm = async (
        event,
        action
    ) => {
        if (action === "edit") {
            /** PUT event to remote DB */
        } else if (action === "create") {

            // const userString = localStorage.getItem('@fonoweb/auth');
            // const userJson = JSON.parse(userString)

            // const patientId = patients.find((item) => item.value === event.title);

            // const toSend = {
            //     doctor_id: userJson.state.user.id,
            //     patient_id: patientId ? patientId.id : 0,
            //     when: event.start,
            //     status: event.status
            // }

            const toSend = {
                doctor_id: '018a0bd8-e807-499d-855c-f32cc643afba',
                patient_id: '0297fb7f-4056-430c-8398-8b38e6646dc1',
                when: event.start,
                status: event.status
            }

            console.log("ola", toSend);

        }
        /**
         * Make sure to return 4 mandatory fields:
         * event_id: string|number
         * title: string
         * start: Date|string
         * end: Date|string
         * ....extra other fields depend on your custom fields/editor properties
         */
        // Simulate http request: return added/edited event
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    ...event,
                    event_id: event.event_id || Math.random()
                });
            }, 3000);
        });
    };

    useEffect(() => {
        getPatients();
        getAppointments();
    }, []);

    return (
        <div>
            <Scheduler
                view="week"
                onConfirm={handleConfirm}
                week={{
                    weekDays: [0, 1, 2, 3, 4, 5],
                    weekStartOn: 6,
                    startHour: 8,
                    endHour: 18,
                    step: 60,
                }}
                locale={ptBR}
                events={booked}
                fields={[
                    {
                        name: "title",
                        type: "select",
                        options: patients,
                        config: { label: "Paciente", required: true, errMsg: "Por favor selecione um paciente" }
                    },
                    {
                        name: "status",
                        type: "select",
                        options: [
                            { id: 1, text: "Atendido", value: "FINISHED" },
                            { id: 2, text: "Falta", value: "FALTA" },
                            { id: 3, text: "Confirmado", value: "SCHEDULED" },
                            { id: 4, text: "Cancelado/Desmarcado", value: "CANCELED" }
                        ],
                        config: { label: "Status", required: true, errMsg: "Por favor selecione um status" }
                    }
                ]}
                translations={{
                    navigation: {
                        month: 'Mês',
                        week: 'Semana',
                        day: 'Dia',
                        today: 'Hoje'
                    },
                    form: {
                        addTitle: 'Adicionar evento',
                        editTitle: 'Editar evento',
                        confirm: 'Confirmar',
                        delete: 'Deletar',
                        cancel: 'Cancelar'
                    },
                    event: {
                        title: 'Paciente',
                        start: 'Inicio',
                        end: 'Final',
                        allDay: 'Todo o dia'
                    },
                    moreEvents: 'Mais...'
                }}
            />
            <div style={{ marginLeft: '3%' }}>
                <div style={{ marginLeft: '3%', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: 10, height: 10, background: 'green', marginTop: 22, marginRight: 5, marginLeft: 10 }} />
                    <p>Atendido</p>
                    <div style={{ width: 10, height: 10, background: '#d10000', marginTop: 22, marginRight: 5, marginLeft: 10 }} />
                    <p>Falta</p>
                    <div style={{ width: 10, height: 10, background: '#1e98d4', marginTop: 22, marginRight: 5, marginLeft: 10 }} />
                    <p>Confirmado</p>
                    <div style={{ width: 10, height: 10, background: '#d45b1e', marginTop: 22, marginRight: 5, marginLeft: 10 }} />
                    <p>Cancelado/Desmarcado</p>
                </div>
            </div>
        </div>
    )
}
