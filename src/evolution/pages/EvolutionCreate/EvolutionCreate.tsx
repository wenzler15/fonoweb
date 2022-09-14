import { LoadingButton } from '@mui/lab'
import { omit } from 'rambda'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { EvolutionForm } from 'evolution/components'
import { useCreateEvolution } from 'evolution/mutations'
import { CreateEvolutionSchema } from 'evolution/schemas'
import { Back } from 'common/components'
import { NavBar } from 'components/navBar'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { useMemo } from 'react'
import cuid from 'cuid'
import { useAuthStore } from 'auth/providers'
import { UserWithDoctor } from 'user/types'

export function EvolutionCreate() {
	const navigate = useNavigate()
	const createEvolution = useCreateEvolution({
		onSuccess: () => {
			navigate('/patients')
			Swal.fire({
				title: 'Success',
				text: 'Avaliação criada com sucesso',
				icon: 'success',
			})
		},
	})

	const user = useAuthStore(state => state.user) as UserWithDoctor

	const handleFormSubmit = async ({
		patient,
		specialty,
		...values
	}: InferType<typeof CreateEvolutionSchema>) => {
		await createEvolution
			.mutateAsync({
				...omit(['template'], values),
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				exercises: values.exercises as any,
				specialty: {
					connect: {
						id: specialty!.id,
					},
				},
				doctor: {
					connect: {
						id: user.doctorData.id,
					},
				},
				patient: {
					connect: {
						id: patient!.patientData.id,
					},
				},
			})
			.catch(console.error)
	}

	return (
		<Formik<InferType<typeof CreateEvolutionSchema>>
			validationSchema={CreateEvolutionSchema}
			initialValues={{
				exercises: [
					{
						cuid: useMemo(() => cuid(), []),
						title: '',
						description: '',
						links: [''],
					},
				],
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				patient: null as any,
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				specialty: null as any,
				appointmentDate: new Date(),
				comments: '',
				text: '',
				title: '',
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
								Nova consulta
								<Back />
							</Typography>
							<LoadingButton
								onClick={() => handleSubmit()}
								variant="contained"
								color="secondary"
								size="large"
								loading={createEvolution.isLoading}
							>
								SALVAR
							</LoadingButton>
						</Box>
						<Card>
							<CardContent sx={{ p: t => t.spacing(4) }}>
								<EvolutionForm />
							</CardContent>
						</Card>
					</Box>
				</>
			)}
		</Formik>
	)
}
