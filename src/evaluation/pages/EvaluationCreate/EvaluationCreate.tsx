import { LoadingButton } from '@mui/lab'
import { omit } from 'rambda'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { EvaluationForm } from 'evaluation/components'
import { useCreateEvaluation } from 'evaluation/mutations'
import { CreateEvaluationDto } from 'evaluation/schemas'
import { Back, FloatingWhatsAppButton } from 'common/components'
import { NavBar } from 'components/navBar'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export function EvaluationCreate() {
	const navigate = useNavigate()
	const createEvaluation = useCreateEvaluation({
		onSuccess: () => {
			navigate('/patients')
			Swal.fire({
				title: 'Success',
				text: 'Avaliação criada com sucesso',
				icon: 'success',
			})
		},
	})

	const handleFormSubmit = async ({
		patient,
		...values
	}: CreateEvaluationDto) => {
		await createEvaluation
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
      <Formik<CreateEvaluationDto>
        initialValues={{
          text: '',
          title: '',
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
                  Nova avaliação
                  <Back />
                </Typography>
                <LoadingButton
                  onClick={() => handleSubmit()}
                  variant="contained"
                  color="secondary"
                  size="large"
                  loading={createEvaluation.isLoading}
                >
                  SALVAR
                </LoadingButton>
              </Box>
              <Card>
                <CardContent sx={{ p: t => t.spacing(4) }}>
                  <EvaluationForm />
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
