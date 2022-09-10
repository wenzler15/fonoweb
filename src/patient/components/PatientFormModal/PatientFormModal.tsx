import {
	Modal,
	Backdrop,
	Fade,
	Card,
	Typography,
	Stack,
	Button,
} from '@mui/material'
import { Formik } from 'formik'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { PatientFormModalProps } from './PatientFormModal.types'
import { CreatePatientSchema } from 'patient/schemas'
import { PatientForm } from '../PatientForm/PatientForm'
import { useUpdatePatient } from 'patient/mutations'
import { useUniversalParam } from 'routes/hooks'

export function PatientFormModal({
	visible,
	onClose,
}: PatientFormModalProps) {
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


	const handleFormSubmit = ({
		...values
	}: InferType<typeof CreatePatientSchema>) => {
		updatePatient.mutate({
      id: patientId as string,
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
						maxHeight: 'calc(100vh - 100px)',
						overflow: 'auto',
						bgcolor: 'background.paper',
						p: t => t.spacing(2),
					}}
				>
					<Formik<InferType<typeof CreatePatientSchema>>
						validationSchema={CreatePatientSchema}
						initialValues={{
                name: '',
                birthDate: null,
                email: '',
                gender: '',
						}}
						onSubmit={handleFormSubmit}
					>
						{({ handleSubmit }) => (
							<>
								<Stack
									direction="row"
									spacing={2}
									sx={{ mb: t => t.spacing(2) }}
								>
									<Typography
										variant="h5"
										component="h2"
										color="secondary"
										sx={{ width: '100%' }}
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
								</Stack>
								<PatientForm />
							</>
						)}
					</Formik>
				</Card>
			</Fade>
		</Modal>
	)
}
