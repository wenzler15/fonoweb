import { LoadingButton } from '@mui/lab'
import { omit } from 'rambda'
import { Box, Typography, Card, CardContent, Button } from '@mui/material'
import { AnamnesisForm } from 'anamnesis/components'
import { useCreateAnamnesis } from 'anamnesis/mutations'
import { CreateAnamnesisDto } from 'anamnesis/schemas'
import { Back, FloatingWhatsAppButton } from 'common/components'
import { NavBar } from 'components/navBar'
import { Formik } from 'formik'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export function AnamnesisCreate() {
	const navigate = useNavigate()
	const createAnamnesis = useCreateAnamnesis({
		onSuccess: () => {
			// navigate('/anamnesis')
			Swal.fire({
				title: 'Success',
				text: 'Anamnese criada com sucesso',
				icon: 'success',
			})
		},
	})

	const handleFormSubmit = async ({
		patient,
		...values
	}: CreateAnamnesisDto) => {
		await createAnamnesis
			.mutateAsync({
				...omit(['template'], values),
				patient: {
					connect: {
						id: patient.patientData.id,
					},
				},
			})
			.catch(console.error)
	}

	return (
		<>
			<Formik<CreateAnamnesisDto>
				initialValues={{
					questions: [],
					text: '',
					// @ts-expect-error null
					patient: null,
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
									Criar anamnese
									<Back />
								</Typography>
								<LoadingButton
									onClick={() => handleSubmit()}
									variant="contained"
									color="secondary"
									size="large"
									loading={createAnamnesis.isLoading}
								>
									SALVAR
								</LoadingButton>
							</Box>
							<Card>
								<CardContent sx={{ p: t => t.spacing(4) }}>
									<AnamnesisForm />
								</CardContent>
							</Card>
						</Box>
					</>
				)}
			</Formik>
			<FloatingWhatsAppButton />
		</>
	)
}
