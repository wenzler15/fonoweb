import { LoadingButton } from '@mui/lab'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { PatientForm } from 'patient/components'
import { useCreatePatient } from 'patient/mutations'
import { CreatePatientSchema } from 'patient/schemas'
import { Back } from 'common/components'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { useAuth } from 'auth/hooks/useAuth'

export function PatientCreate() {
	const { user } = useAuth()
	const navigate = useNavigate()
	const createPatient = useCreatePatient({
		onSuccess: () => {
			navigate('/patients')
			Swal.fire({
				title: 'Success',
				text: 'Paciente criada com sucesso',
				icon: 'success',
			})
		},
	})

	const handleFormSubmit = ({
		...values
	}: InferType<typeof CreatePatientSchema>) => {
		createPatient.mutate({
			...values,
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			doctorId: user!.doctorData.id,
		})
	}

	return (
		<Formik<InferType<typeof CreatePatientSchema>>
			initialValues={{
				name: '',
				email: '',
				// @ts-expect-error null
				birthDate: '',
				// @ts-expect-error null
				gender: '',
				socialName: '',
				address: {
					zipCode: '',
					streetName: '',
					district: '',
					number: '',
					city: '',
					state: '',
				},
			}}
			validationSchema={CreatePatientSchema}
			onSubmit={handleFormSubmit}
		>
			{({ handleSubmit }) => (
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
							Novo Paciente
							<Back />
						</Typography>
					</Box>
					<Card>
						<CardContent sx={{ p: t => t.spacing(4) }}>
							<PatientForm />
							<LoadingButton
								onClick={() => handleSubmit()}
								variant="contained"
								color="primary"
								size="large"
								loading={createPatient.isLoading}
								sx={{ mt: theme => theme.spacing(5) }}
							>
								Cadastrar paciente
							</LoadingButton>
						</CardContent>
					</Card>
				</Box>
			)}
		</Formik>
	)
}
