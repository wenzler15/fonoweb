import { LoadingButton } from '@mui/lab'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { PatientForm } from 'patient/components'
import { useCreatePatient } from 'patient/mutations'
import { CreatePatientDto, PatientFormSchema } from 'patient/schemas'
import { Back, FloatingWhatsAppButton } from 'common/components'
import { NavBar } from 'components/navBar'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export function PatientCreate() {
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

	const handleFormSubmit = async ({
		...values
	}: CreatePatientDto) => {
		await createPatient
			.mutateAsync({
				...values,
			})
			.catch(console.error)
	}

	return (
    <>
      <Formik<CreatePatientDto>
        initialValues={{
          name: '',
          natalSex: 'feminino',
          birthday: '',
          email:'',
        }}
        validationSchema={PatientFormSchema}
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
          </>
        )}
      </Formik>
      <FloatingWhatsAppButton />
    </>
	)
}
