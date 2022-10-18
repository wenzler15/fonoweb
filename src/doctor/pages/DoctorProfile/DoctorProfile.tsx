import { LoadingButton } from '@mui/lab'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { Back, FloatingWhatsAppButton } from 'common/components'
import { NavBar } from 'components/navBar'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { DoctorForm } from 'doctor/components'
import { UpdateDoctorSchema } from 'doctor/schemas'
import { useUpdateDoctor } from 'doctor/mutations'
import { isNil, pick } from 'rambda'
import { useCurrentUser } from 'doctor/queries'

export function DoctorProfile() {
	const navigate = useNavigate()
	const { data } = useCurrentUser()
	const user = data?.result

	const updateDoctor = useUpdateDoctor({
		onSuccess: () => {
			navigate('/doctors/profile')
			Swal.fire({
				title: 'Success',
				text: 'Doutor atualizado com sucesso',
				icon: 'success',
			})
		},
	})

	const handleFormSubmit = async ({
		...values
	}: InferType<typeof UpdateDoctorSchema>) => {
		const shouldUpdate = values.addresses.filter(address => address.id)
		const shouldCreate = values.addresses.filter(address => isNil(address.id))

		const normalizeData = {
			...pick(['name', 'email', 'cpf'], values),
			addresses: {
				...(shouldCreate.length > 0 && {
					createMany: {
						data: [...shouldCreate],
					},
				}),
				...(shouldUpdate.length > 0 && {
					update: [
						...values.addresses
							.filter(address => address.id)
							.map(address => ({
								where: {
									id: address.id,
								},
								data: {
									...pick(
										[
											'zipCode',
											'streetName',
											'number',
											'district',
											'city',
											'state',
										],
										address,
									),
								},
							})),
					],
				}),
			},
		}

		updateDoctor.mutate({ id: user?.id as string, ...normalizeData })
	}

	return (
		<>
			<Formik<InferType<typeof UpdateDoctorSchema>>
				validationSchema={UpdateDoctorSchema}
				// TODO: Get initial values from current user
				initialValues={{
					name: '',
					cpf: '',
					email: '',
					addresses: user?.addresses || [],
				}}
				onSubmit={handleFormSubmit}
			>
				{({ handleSubmit }) => (
					<>
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
									Dados Pessoais
									<Back />
								</Typography>
								<LoadingButton
									onClick={() => handleSubmit()}
									variant="contained"
									color="secondary"
									size="large"
									loading={updateDoctor.isLoading}
								>
									Editar
								</LoadingButton>
							</Box>
							<Card>
								<CardContent sx={{ p: t => t.spacing(4) }}>
									<DoctorForm />
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
