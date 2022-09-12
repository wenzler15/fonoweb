import {
	Modal,
	Backdrop,
	Fade,
	Card,
	Typography,
	Stack,
	Button,
} from '@mui/material'
import { omit } from 'rambda'
import { EvaluationForm } from 'evaluation/components'
import { useCreateEvaluation } from 'evaluation/mutations'
import { CreateEvaluationSchema } from 'evaluation/schemas'
import { Formik } from 'formik'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { PatientEvaluationModalProps } from './PatientEvaluationModal.types'

export function PatientEvaluationModal({
	visible,
	onClose,
}: PatientEvaluationModalProps) {
	const createEvaluation = useCreateEvaluation({
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
	}: InferType<typeof CreateEvaluationSchema>) => {
		createEvaluation.mutate({
			...omit(['template'], values),
			patientId: patient!.patientData.id,
			specialtyId: specialty!.id,
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
					<Formik<InferType<typeof CreateEvaluationSchema>>
						validationSchema={CreateEvaluationSchema}
						initialValues={{
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							patient: null as any,
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							specialty: null as any,
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
										Nova avaliação
									</Typography>
									<Button
										variant="contained"
										color="secondary"
										onClick={() => handleSubmit()}
									>
										Salvar
									</Button>
								</Stack>
								<EvaluationForm
									config={{
										canUseTemplate: false,
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
