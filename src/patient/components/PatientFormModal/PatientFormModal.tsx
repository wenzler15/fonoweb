import {
	Modal,
	Backdrop,
	Fade,
	Card,
	Typography,
	Stack,
	Button,
	Box,
} from '@mui/material'
import { Formik } from 'formik'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { PatientFormModalProps } from './PatientFormModal.types'
import { CreatePatientSchema } from 'patient/schemas'
import { PatientForm } from '../PatientForm/PatientForm'
import { useUpdatePatient } from 'patient/mutations'
import { useUniversalParam } from 'routes/hooks'
import { usePatientById } from 'patient/queries'
import { mergeDeepRight, mergeRight } from 'rambda'

export function PatientFormModal({ visible, onClose }: PatientFormModalProps) {
	const updatePatient = useUpdatePatient({
		onSuccess: () => {
			onClose()
			Swal.fire({
				title: 'Success',
				text: 'Paciente atualizado com sucesso',
				icon: 'success',
			})
		},
	})

	const patientId = useUniversalParam('patient')

	const patient = usePatientById(patientId as string)

	const handleFormSubmit = ({
		...values
	}: InferType<typeof CreatePatientSchema>) => {
		updatePatient.mutate({
			id: patient.data?.id as string,
			...values,
		})
	}

	return (
		<Modal
			open={visible}
			onClose={onClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={visible}>
				<Card
					sx={{
						position: 'absolute' as const,
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 1000,
						overflow: 'hidden',
						bgcolor: 'background.paper',
					}}
				>
					<Formik<InferType<typeof CreatePatientSchema>>
						validationSchema={CreatePatientSchema}
						initialValues={mergeDeepRight(
							{
								name: '',
								email: '',
								birthDate: '',
								gender: '',
								customGender: '',
								socialName: '',
								address: {
									zipCode: '',
									streetName: '',
									district: '',
									number: '',
									city: '',
									state: '',
								},
							},
							{
								name: patient.data?.name,
								socialName: patient.data?.socialName,
								email: patient.data?.email,
								customGender: patient.data?.customGender,
								gender: patient.data?.gender,
								address: patient.data?.addresses[0] ?? {
									zipCode: '',
									streetName: '',
									district: '',
									number: '',
									city: '',
									state: '',
								},
								birthDate: patient.data?.birthDate ?? new Date(),
							},
						)}
						onSubmit={handleFormSubmit}
					>
						{({ handleSubmit }) => (
							<Box display="flex" flexDirection="column">
								<Box
									sx={{
										flex: 1,
										px: 4,
										py: 3,
										display: 'flex',
										alignItems: 'center',
										borderBottom: '1px solid #e0e0e0',
									}}
								>
									<Typography
										variant="h5"
										component="h2"
										color="secondary"
										sx={{ flexGrow: 1 }}
									>
										Editar Paciente
									</Typography>
									<Button
										variant="contained"
										color="secondary"
										onClick={() => handleSubmit()}
									>
										Salvar
									</Button>
								</Box>
								<Box
									maxHeight="calc(100vh - 180px)"
									sx={{ overflowY: 'auto' }}
									p={4}
								>
									<PatientForm />
								</Box>
							</Box>
						)}
					</Formik>
				</Card>
			</Fade>
		</Modal>
	)
}
