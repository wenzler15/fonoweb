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
	Pagination as MuiPagination,
} from '@mui/material'
import { useSpecialties } from 'specialty/queries'
import { useFindManyExercises } from 'exercise/queries'
import { useVisible } from 'common/hooks'
import { useAuthStore } from 'auth/providers'
import { UserWithDoctor } from 'user/types'
import { Exercise } from 'exercise/types'
import { EmbedVideo, LoadingOverlay } from 'common/components'
import { map } from 'rambda'
import { piped } from 'rambdax'
import {
	UsedExercise,
	useUsedExercises,
} from 'exercise/queries/useUsedExercises'
import { isListable } from '@excelsia/general-helpers'

function RenderUsedExercises({
	exercise,
}: {
	exercise: UsedExercise
}): ReactElement {
	return (
		<Box mb={6} key={exercise.id}>
			<Typography variant="h5" component="h2">
				{exercise.title}
			</Typography>
			<Typography variant="body1" component="p" mb={2}>
				{exercise.specialty}
			</Typography>
			<Grid container spacing={2}>
				{piped(
					exercise.links,
					map(l => (
						<Grid item xs={4}>
							<EmbedVideo url={l} title={exercise.title} />
						</Grid>
					)),
				)}
			</Grid>
		</Box>
	)
}

function RenderAvaliableExercises({
	exercise,
}: {
	exercise: Exercise
}): ReactElement {
	return (
		<Box mb={6} key={exercise.id}>
			<Typography variant="h5" component="h2">
				{exercise.title}
			</Typography>
			<Typography variant="body1" component="p" mb={2}>
				{exercise.specialty.name}
			</Typography>
			<Grid container spacing={2}>
				{piped(
					exercise.links,
					map(l => (
						<Grid item xs={4}>
							<EmbedVideo url={l} title={exercise.title} />
						</Grid>
					)),
				)}
			</Grid>
		</Box>
	)
}

export function Exercises(): ReactElement {
	const [specialty, setSpecialty] = useState<string>()

	const available = useVisible()
	const mine = useVisible()
	const navigate = useNavigate()
	const user = useAuthStore(state => state.user) as UserWithDoctor

	const [usedPagination, setUsedPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 5,
	})

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

	const usedExercises = useUsedExercises({
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
						</Grid>
						<Grid item xs={2} sx={{ textAlign: 'right' }}>
							{user.isAdmin && (
								<Button
									variant="contained"
									size="large"
									color="primary"
									onClick={() => navigate('/exercises/create')}
								>
									Novo exercício
								</Button>
							)}
						</Grid>
						<Grid item xs={12}>
							<CustomButton onClick={mine.toggle}>
								Meus exercícios
								{mine.visible ? <CustomArrowDown /> : <CustomArrowRight />}
							</CustomButton>
							<Collapse in={mine.visible} timeout="auto" unmountOnExit>
								{isListable(usedExercises.data) ? (
									usedExercises.data.map(exercise => (
										<RenderUsedExercises
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
										setExercisePagination({
											...exercisePagination,
											page: page - 1,
										})
									}
								/>
							</Collapse>
						</Grid>
						<Grid item xs={12}>
							<CustomButton onClick={available.toggle}>
								Modelos de exercícios disponíveis
								{available.visible ? <CustomArrowDown /> : <CustomArrowRight />}
							</CustomButton>
							<Collapse in={available.visible} timeout="auto" unmountOnExit>
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
										setExercisePagination({
											...exercisePagination,
											page: page - 1,
										})
									}
								/>
							</Collapse>
						</Grid>
					</Grid>
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
			<LoadingOverlay show={exercises.isLoading || usedExercises.isLoading} />
		</Container>
	)
}
