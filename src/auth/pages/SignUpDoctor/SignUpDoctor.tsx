import { Box, Button, Card, Stack, Typography } from '@mui/material'
import { SignUpDoctorSchema } from 'auth/schemas'
import { Upload } from 'common/formik'
import { NavBar } from 'components/navBar'
import { Field, Formik } from 'formik'
import { TextField } from 'formik-mui'
import { InferType } from 'yup'

export function SignUpDoctor() {
	const handleFormSubmit = (values: InferType<typeof SignUpDoctorSchema>) =>
		console.log(values)

	return (
		<>
			<NavBar />
			<Box sx={{ p: t => t.spacing(4), pb: t => t.spacing(9) }}>
				<Typography component="h2" variant="h4" gutterBottom color="secondary">
					Preencha os dados abaixo
				</Typography>
				<Card sx={{ p: t => t.spacing(2) }}>
					<Formik<InferType<typeof SignUpDoctorSchema>>
						onSubmit={handleFormSubmit}
						validationSchema={SignUpDoctorSchema}
						initialValues={{
							email: '',
							name: '',
							gender: '',
							password: '',
							passwordConfirmation: '',
							cpf: '',
							crfa: null,
							address: {
								streetName: '',
								zipCode: '',
								district: '',
								state: '',
								city: '',
								number: '',
								complement: '',
							},
						}}
					>
						{({ handleSubmit }) => (
							<Stack spacing={2}>
								<Stack direction="row" spacing={2}>
									<Field
										name="name"
										label="Nome completo"
										component={TextField}
										fullWidth
									/>
									<Field
										fullWidth
										name="email"
										label="Email"
										component={TextField}
									/>
									<Field
										fullWidth
										name="cpf"
										label="CPF"
										component={TextField}
									/>
								</Stack>
								<Stack direction="row" spacing={2}>
									<Field
										name="password"
										type="password"
										label="Senha"
										component={TextField}
										fullWidth
									/>
									<Field
										fullWidth
										type="password"
										name="passwordConfirmation"
										label="Confirme a senha"
										component={TextField}
									/>
									<Upload
										label="Envie seu CRFA ou um comprovante de faculdade"
										multiple={false}
										name="crfa"
									/>
								</Stack>
								<Button onClick={() => handleSubmit()}>Enviar</Button>
							</Stack>
						)}
					</Formik>
				</Card>
			</Box>
		</>
	)
}
