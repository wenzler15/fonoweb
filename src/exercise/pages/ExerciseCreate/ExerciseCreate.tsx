import { LoadingButton } from '@mui/lab'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { ExerciseForm } from 'exercise/components'
import { useCreateExercise } from 'exercise/mutations'
import { CreateExerciseSchema } from 'exercise/schemas'
import { Back } from 'common/components'
import { NavBar } from 'components/navBar'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { useAuthStore } from 'auth/providers'
import { UserWithDoctor } from 'user/types'

export function ExerciseCreate() {
	const navigate = useNavigate()
	const createExercise = useCreateExercise({
		onSuccess: () => {
			navigate('/exercises')
			Swal.fire({
				title: 'Success',
				text: 'Exercício criado com sucesso',
				icon: 'success',
			})
		},
	})

	const user = useAuthStore(state => state.user) as UserWithDoctor

	const handleFormSubmit = ({
		...values
	}: InferType<typeof CreateExerciseSchema>) => {
		createExercise.mutate({
			...values,
			creator: {
				connect: {
					id: user.id,
				},
			},
		})
	}

	return (
		<Formik<InferType<typeof CreateExerciseSchema>>
			validationSchema={CreateExerciseSchema}
			initialValues={{
				title: '',
				description: '',
				links: [''],
			}}
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
								Novo exercício
								<Back />
							</Typography>
							<LoadingButton
								onClick={() => handleSubmit()}
								variant="contained"
								color="secondary"
								size="large"
								loading={createExercise.isLoading}
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
	)
}
