import { ReactElement, useState } from 'react'
import { Pagination } from 'common/types'
import { useNavigate } from 'react-router-dom'
import {
	Container,
	CustomArrowRight,
	CustomButton,
	CustomArrowDown,
} from './styles'
import {
	Collapse,
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	Typography,
	useTheme,
	Modal,
	Fade,
	Card,
	IconButton,
	Backdrop,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Pagination as MuiPagination,
} from '@mui/material'
import { useSpecialties } from 'specialty/queries'
import { useFindManyExercises } from 'exercise/queries'
import { useVisible } from 'common/hooks'
import { Close } from '@mui/icons-material'
import { useAuthStore } from 'auth/providers'
import { UserWithDoctor } from 'user/types'
import { Exercise } from 'exercise/types'
import { isListable } from '@excelsia/general-helpers'
import { LoadingOverlay } from 'common/components'

function RenderAvaliableExercises({
	exercise,
}: {
	exercise: Exercise
}): ReactElement {
	const modal = useVisible()

	return (
		<Grid container spacing={2} mb={6} key={exercise.id}>
			<Grid item xs={10}>
				<Typography variant="h5" component="h2">
					{exercise.title}
				</Typography>
				<Typography variant="body1" component="p">
					{exercise.specialty.name}
				</Typography>
			</Grid>
			<Grid item xs={2}>
				<Stack
					justifyContent="flex-end"
					spacing={2}
					alignItems="flex-end"
					direction="row"
				>
					<Button
						sx={{ borderRadius: 0 }}
						variant="contained"
						size="medium"
						onClick={modal.show}
					>
						Visualizar
					</Button>
				</Stack>
			</Grid>
			<Modal
				open={modal.visible}
				onClose={modal.hide}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={modal.visible}>
					<Card
						sx={{
							position: 'absolute' as const,
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 800,
							boxShadow: 24,
							p: t => t.spacing(2),
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								mb: t => t.spacing(2),
							}}
						>
							<Typography variant="h5" component="h2">
								{exercise.title}
							</Typography>
							<IconButton onClick={modal.hide}>
								<Close />
							</IconButton>
						</Box>
						<Paper
							elevation={1}
							sx={{
								maxHeight: 800,
								border: '1px solid #eee',
								overflow: 'auto',
							}}
						>
							<List>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemText
											primary={exercise.title}
											secondary={exercise.description}
										/>
									</ListItemButton>
								</ListItem>
								{exercise.links.map(link => (
									<ListItem key={link}>
										<a href={link} target="_blank" rel="noreferrer">
											{link}
										</a>
									</ListItem>
								))}
							</List>
						</Paper>
					</Card>
				</Fade>
			</Modal>
		</Grid>
	)
}

export function Exercises(): ReactElement {
	const [showAvaliableExercise, setShowAvaliableExercise] =
		useState<boolean>(true)
	const [showMyExercise, setShowMyExercise] = useState<boolean>(true)

	const handleChangeAvaliableExercise = () => {
		setShowAvaliableExercise(oldState => !oldState)
	}
	const handleChangeMyExercise = () => {
		setShowMyExercise(oldState => !oldState)
	}

	const [specialty, setSpecialty] = useState<string>()

	const navigate = useNavigate()
	const user = useAuthStore(state => state.user) as UserWithDoctor

	const [exercisePagination, setExercisePagination] = useState<
		Required<Pagination>
	>({
		page: 0,
		size: 5,
	})

	const exercises = useFindManyExercises({
		where: {
			creatorId: user.id,
			specialtyId: specialty,
		},
		orderBy: {
			createdAt: 'desc',
		},
		take: exercisePagination.size,
		skip: exercisePagination.page * exercisePagination.size,
	})

	const theme = useTheme()

	const specialties = useSpecialties({
		page: 1,
		size: 9999,
	})

	return (
		<Container>
			<Box sx={{ p: theme.spacing(4), pb: theme.spacing(9) }}>
				<Paper
					elevation={3}
					sx={{ p: t => t.spacing(2), mb: t => t.spacing(2) }}
				>
					<Typography
						variant="h6"
						component="h2"
						color="secondary"
						sx={{ mb: theme.spacing(2) }}
					>
						Filtros
					</Typography>
					<Stack spacing={2} direction="row">
						<FormControl fullWidth>
							<InputLabel>Especialidade</InputLabel>
							<Select
								label="Especialidade"
								onChange={({ target }) => setSpecialty(target.value as string)}
							>
								{specialties.data?.result.map(s => (
									<MenuItem key={s.id} value={s.id}>
										{s.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Stack>
				</Paper>
				<Paper elevation={3} sx={{ p: t => t.spacing(2) }}>
					<Grid container mb={2}>
						<Grid item xs={10}>
							<Typography
								variant="h5"
								component="h1"
								color="secondary"
								sx={{ mb: theme.spacing(2) }}
							>
								Exercícios
							</Typography>
							<CustomButton onClick={handleChangeAvaliableExercise}>
								Modelos de exercícios disponíveis
								{showAvaliableExercise ? (
									<CustomArrowDown />
								) : (
									<CustomArrowRight />
								)}
							</CustomButton>
						</Grid>
						<Grid item xs={2} sx={{ textAlign: 'right' }}>
							<Button
								sx={{ borderRadius: 0 }}
								variant="contained"
								size="large"
								color="primary"
								onClick={() => navigate('/exercises/create')}
							>
								EXPORTAR
							</Button>
						</Grid>
					</Grid>
					<Collapse in={showAvaliableExercise} timeout="auto" unmountOnExit>
						{exercises.data?.result && exercises.data.result.length > 0 ? (
							exercises.data.result.map(exercise => (
								<RenderAvaliableExercises
									exercise={exercise}
									key={exercise.id}
								/>
							))
						) : (
							<Box component="span" sx={{ display: 'block' }}>
								<Typography variant="h6" component="h4" align="center">
									Sem dados
								</Typography>
							</Box>
						)}
						<MuiPagination
							count={Math.ceil(
								(exercises.data?.count ?? 0) / exercisePagination.size,
							)}
							page={exercisePagination.page + 1}
							onChange={(_, page) =>
								setExercisePagination({ ...exercisePagination, page: page - 1 })
							}
						/>
					</Collapse>
					<Button
						sx={{ marginTop: 2 }}
						variant="contained"
						fullWidth
						type="button"
						size="large"
						onClick={() => navigate('/exercises/create')}
					>
						Criar novo exercício
					</Button>
				</Paper>
			</Box>
			<LoadingOverlay show={exercises.isLoading} />
		</Container>
	)
}
