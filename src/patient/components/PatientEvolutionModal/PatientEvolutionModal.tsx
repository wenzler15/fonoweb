import {
	Modal,
	Backdrop,
	Fade,
	Card,
	Typography,
	Stack,
	Button,
} from '@mui/material'
import cuid from 'cuid'
import { omit } from 'rambda'
import { EvolutionForm } from 'evolution/components'
import { useCreateEvolution } from 'evolution/mutations'
import { CreateEvolutionSchema } from 'evolution/schemas'
import { Formik } from 'formik'
import { useMemo } from 'react'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { PatientEvolutionModalProps } from './PatientEvolutionModal.types'
import { useAuth } from 'auth/hooks/useAuth'

export function PatientEvolutionModal({
	visible,
	onClose,
}: PatientEvolutionModalProps) {
	const auth = useAuth()
	const createEvolution = useCreateEvolution({
		onSuccess: () => {
			onClose()
			Swal.fire({
				title: 'Success',
				text: 'Consulta criada com sucesso',
				icon: 'success',
			})
		},
	})

	const handleFormSubmit = ({
		patient,
		specialty,
		...values
	}: InferType<typeof CreateEvolutionSchema>) => {
		createEvolution.mutate({
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
					id: auth.user!.doctorData.id,
				},
			},
			patient: {
				connect: {
					id: patient!.patientData.id,
				},
			},
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
										Nova consulta
									</Typography>
									<Button
										variant="contained"
										color="secondary"
										onClick={() => handleSubmit()}
									>
										Salvar
									</Button>
								</Stack>
								<EvolutionForm
									config={{
										canUseTemplate: false,
										canChangeAppointmentDate: false,
									}}
								/>
							</>
						)}
					</Formik>
				</Card>
			</Fade>
		</Modal>
	)
}
