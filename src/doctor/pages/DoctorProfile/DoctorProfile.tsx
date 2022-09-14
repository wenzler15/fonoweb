import { LoadingButton } from '@mui/lab'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { Back, FloatingWhatsAppButton } from 'common/components'
import { NavBar } from 'components/navBar'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { useAuth } from 'auth/hooks/useAuth'
import { DoctorForm } from 'doctor/components'
import { UpdateDoctorSchema } from 'doctor/schemas'
import { useUpdateDoctor } from 'doctor/mutations'
import { pick } from 'rambda'

export function DoctorProfile() {
	const navigate = useNavigate()
	const { user } = useAuth()
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
    const data = {
        ...pick(['name', 'email', 'cpf'], values),
        addresses:  [{
         createOrConnect:  {
           where:  {
             id: 1,
           },
           create: {
            zipCode: values.zipCode,
            streetName: values.streetName,
            district: values.district,
            number: values.number,
            city: values.city,
            state: values.state,
           }
         }
       }, {
         createOrConnect:  {
           where:  {
             id: 2
           },
           create: {
            zipCode: values.workZipCode,
            streetName: values.workStreetName,
            district: values.workDistrict,
            number: values.workNumber,
            city: values.workCity,
            state: values.workState,
           }
         }
       }]
     }

     updateDoctor.mutate({ id: user?.id as string, ...data })
	}

	return (
		<>
			<Formik<InferType<typeof UpdateDoctorSchema>>
				validationSchema={UpdateDoctorSchema}
        // TODO: Get initial values from current user
				initialValues={{ }}
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
									Dados Pessoais
									<Back />
								</Typography>
								<LoadingButton
									onClick={() => handleSubmit()}
									variant="contained"
									color="secondary"
									size="large"
									// loading={createAnamnesis.isLoading}
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
