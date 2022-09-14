import { LoadingButton } from '@mui/lab'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { ExerciseForm } from 'exercise/components'
import { useUpdateExercise } from 'exercise/mutations'
import { CreateExerciseSchema } from 'exercise/schemas'
import { Back, LoadingOverlay } from 'common/components'
import { NavBar } from 'components/navBar'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { useUniversalParam } from 'routes/hooks'
import { useFindOneExercise } from 'exercise/queries'
import { Exercise } from 'exercise/types'

export function ExerciseUpdate() {
	const navigate = useNavigate()
	const exerciseId = useUniversalParam('exercise')
	const updateExercise = useUpdateExercise({
		onSuccess: () => {
			navigate('/exercises')
			Swal.fire({
				title: 'Success',
				text: 'Exercício atualizado com sucesso',
				icon: 'success',
			})
		},
	})

	const exercise = useFindOneExercise({
		where: { id: exerciseId as string },
	})

	const handleFormSubmit = ({
		...values
	}: InferType<typeof CreateExerciseSchema>) => {
		updateExercise.mutate({
			id: exerciseId as string,
			...values,
		})
	}

	return (
		<>
			<Formik<InferType<typeof CreateExerciseSchema>>
				enableReinitialize
				validationSchema={CreateExerciseSchema}
				initialValues={
					CreateExerciseSchema.cast(
						(exercise.data?.result as object | undefined) ?? {
							links: [''],
						},
						{ stripUnknown: true },
					) as Exercise
				}
				onSubmit={handleFormSubmit}
			>
				{({ handleSubmit }) => (
					<>
						<NavBar />
						<Box sx={{ p: t => t.spacing(4) }}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<Typography
									variant="h4"
									component="h1"
									color="secondary"
									sx={{ mb: t => t.spacing(2) }}
								>
									Editar exercício
									<Back />
								</Typography>
								<LoadingButton
									onClick={() => handleSubmit()}
									variant="contained"
									color="secondary"
									size="large"
									loading={updateExercise.isLoading}
								>
									SALVAR
								</LoadingButton>
							</Box>
							<Card>
								<CardContent sx={{ p: t => t.spacing(4) }}>
									<ExerciseForm />
								</CardContent>
							</Card>
						</Box>
					</>
				)}
			</Formik>
			<LoadingOverlay show={exercise.isLoading} />
		</>
	)
}
