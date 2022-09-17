/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	AutocompleteRenderInputParams,
	Box,
	Button,
	Card,
	Stack,
	Typography,
	TextField as MTextField,
	Paper,
	InputBaseComponentProps,
} from '@mui/material'
import InputMask from 'react-input-mask'
import { Specialty, UserType } from '@prisma/client'
import { SignUpDoctorSchema } from 'auth/schemas'
import { LoadingOverlay } from 'common/components'
import { Upload } from 'common/formik'
import { NavBar } from 'components/navBar'
import { useCreateUser } from 'doctor/mutations/useCreateUser'
import { Field, Formik } from 'formik'
import { Autocomplete, TextField } from 'formik-mui'
import { useNavigate } from 'react-router-dom'
import { useSpecialties } from 'specialty/queries'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { omit } from 'rambda'
import { Address } from 'user/types'

export function SignUpDoctor() {
	const navigate = useNavigate()
	const specialties = useSpecialties({
		page: 1,
		size: 9999,
	})

	const createUser = useCreateUser({
		onSuccess: () => {
			Swal.fire({
				title: 'Sucesso!',
				text: 'Cadastro realizado com sucesso! Em breve você receberá um email de confirmação.',
				icon: 'success',
				confirmButtonText: 'Ok',
			})
			navigate('/login')
		},
		onError: () => {
			Swal.fire({
				title: 'Erro!',
				text: 'Ocorreu um erro ao realizar o cadastro.',
				icon: 'error',
				confirmButtonText: 'Ok',
			})
		},
	})

	const handleFormSubmit = ({
		specialty,
		...values
	}: InferType<typeof SignUpDoctorSchema>) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		createUser.mutate({
			...(omit(['passwordConfirmation'], values) as any),
			specialtyId: specialty.id,
			type: UserType.DOCTOR,
		})

	return (
		<>
			<NavBar />
			<Box sx={{ p: 4, pb: 9 }}>
				<Typography component="h2" variant="h4" gutterBottom color="secondary">
					Preencha os dados abaixo
				</Typography>
				<Card sx={{ px: 5, py: 5 }}>
					<Formik<InferType<typeof SignUpDoctorSchema>>
						onSubmit={handleFormSubmit}
						validationSchema={SignUpDoctorSchema}
						initialValues={{
							email: '',
							name: '',
							password: '',
							passwordConfirmation: '',
							cpf: '',
							// @ts-expect-error null
							crfa: null,
							// @ts-expect-error null
							specialty: null,
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
						{({ handleSubmit, errors, touched }) =>
							console.log(errors) || (
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
										<Field name="cpf" componet={TextField}>
											{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
											{({ field, form: { values } }: any) => (
												<InputMask
													{...field}
													onChange={field.onChange}
													mask="999.999.999-99"
													name="cpf"
													value={values.cpf}
												>
													{(inputProps: InputBaseComponentProps) => (
														<MTextField
															type="text"
															inputProps={inputProps}
															fullWidth
															variant="outlined"
															placeholder="CEP"
															helperText={errors.cpf}
															error={Boolean(touched.cpf && errors.cpf)}
														/>
													)}
												</InputMask>
											)}
										</Field>
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
									</Stack>
									<Stack direction="row" spacing={2}>
										<Field
											fullWidth
											name="specialty"
											component={Autocomplete}
											options={specialties.data?.result ?? []}
											getOptionLabel={(option: Specialty) => option.name}
											renderInput={(params: AutocompleteRenderInputParams) => (
												<MTextField
													{...params}
													name="specialty-search"
													error={touched.specialty && !!errors.specialty}
													helperText={errors.specialty?.toString()}
													label="Especialidade"
													variant="outlined"
												/>
											)}
										/>
										<Upload
											label="Envie seu CRFA ou um comprovante de faculdade"
											multiple={false}
											name="crfa"
										/>
									</Stack>
									<Paper sx={{ p: 4 }} variant="outlined">
										<Typography
											mt={-1}
											component="div"
											gutterBottom
											fontSize="1.5rem"
											color="secondary"
										>
											Endereço
										</Typography>
										<Stack spacing={2}>
											<Stack direction="row" spacing={2}>
												<Field name="address.zipCode" componet={TextField}>
													{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
													{({ field, form: { values } }: any) => (
														<InputMask
															{...field}
															onChange={field.onChange}
															mask="99999-999"
															name="address.zipCode"
															value={values.address?.zipCode}
														>
															{(inputProps: InputBaseComponentProps) => (
																<MTextField
																	type="text"
																	inputProps={inputProps}
																	fullWidth
																	variant="outlined"
																	placeholder="CEP"
																	helperText={errors.address?.zipCode}
																	error={Boolean(
																		touched.address?.zipCode &&
																			errors.address?.zipCode,
																	)}
																/>
															)}
														</InputMask>
													)}
												</Field>
												<Field
													fullWidth
													name="address.streetName"
													label="Rua"
													component={TextField}
												/>
											</Stack>
											<Stack direction="row" spacing={2}>
												<Field
													fullWidth
													name="address.district"
													label="Bairro"
													component={TextField}
												/>
												<Field
													fullWidth
													name="address.number"
													label="Número"
													component={TextField}
												/>
											</Stack>
											<Stack direction="row" spacing={2}>
												<Field
													fullWidth
													name="address.complement"
													label="Complemento"
													component={TextField}
												/>
												<Field
													fullWidth
													name="address.city"
													label="Cidade"
													component={TextField}
												/>
												<Field
													fullWidth
													name="address.state"
													label="Estado"
													component={TextField}
												/>
											</Stack>
										</Stack>
									</Paper>
									<Box display="flex" justifyContent="center" pt={5}>
										<Button
											variant="contained"
											size="xlarge"
											onClick={() => handleSubmit()}
										>
											Finalizar cadastro
										</Button>
									</Box>
								</Stack>
							)
						}
					</Formik>
				</Card>
				<LoadingOverlay show={createUser.isLoading} />
			</Box>
		</>
	)
}
