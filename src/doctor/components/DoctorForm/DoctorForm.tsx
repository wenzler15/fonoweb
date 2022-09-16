/* eslint-disable @typescript-eslint/prefer-optional-chain */
import {
	Stack,
	Box,
	Typography,
	Grid,
	TextField as MTextField,
  InputBaseComponentProps,
} from '@mui/material'
import { TextField } from 'formik-mui'
import { Field, useFormikContext, FieldArray } from 'formik'
import { Label, TextFieldWrapper } from './DoctorForm.styles'
import InputMask from 'react-input-mask'
import { useCurrentUser } from 'doctor/queries'
import { useEffect } from 'react'
import { Address } from 'user/types'
import { prop, sortBy } from 'rambda'


export function DoctorForm() {
  const { data } = useCurrentUser();
  const user = data?.result;
	const { errors, touched, setFieldValue } = useFormikContext<{
		name: string
		email: string
		cpf: string
    addresses: Address[],
	}>()


  useEffect(() => {
		if (user) {
			setFieldValue('name', user.name);
			setFieldValue('email', user.email);
			setFieldValue('cpf', user.cpf);
			setFieldValue('addresses', [...sortBy(prop('numericId'), user.addresses)]);
    }
	}, [user, setFieldValue])

  return (
		<Stack spacing={3}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Label>Nome Completo</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.name && !!errors.name}
						helperText={errors.name}
						name="name"
						placeholder="Nome completo"
					/>
				</Grid>
        <Grid item xs={6}>
					<Label>Email</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.email && !!errors.email}
						helperText={errors.email}
						name="email"
						placeholder="Email"
            type="email"
					/>
				</Grid>
        <Grid item xs={6}>
					<Label>CPF</Label>
					<Field name="cpf" componet={TextField} sx={{ borderRadius: 0 }}>
						{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
						{({ field, form: { values } }: any) => (
							<InputMask
								{...field}
								onChange={field.onChange}
								mask="999.999.999-99"
								name="cpf"
								value={values.cpf}
								sx={{ borderRadius: 0 }}
							>
								{(inputProps: InputBaseComponentProps) => (
									<MTextField
										type="text"
										inputProps={inputProps}
										fullWidth
										variant="outlined"
										placeholder="CPF"
										helperText={errors.cpf}
										error={touched.cpf && !!errors.cpf}
										sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
									/>
								)}
							</InputMask>
						)}
					</Field>
				</Grid>
        <Box width="100%" />
        <FieldArray
          name="addresses"
          render={() => (
            <>
              <input name="addresses.0.id" value={user?.addresses?.[0]?.id} type="hidden" />
              <input name="addresses.1.id" value={user?.addresses?.[1]?.id} type="hidden" />
              <Grid item xs={3}>
                <Label>CEP</Label>
                <Field name="addresses.0.zipCode" componet={TextField} sx={{ borderRadius: 0 }}>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {({ field, form: { values } }: any) => (
                    <InputMask
                      {...field}
                      onChange={field.onChange}
                      mask="99999-999"
                      name="addresses.0.zipCode"
                      value={values?.addresses[0]?.zipCode}
                      sx={{ borderRadius: 0 }}
                    >
                      {(inputProps: InputBaseComponentProps) => (
                        <MTextField
                          type="text"
                          inputProps={inputProps}
                          fullWidth
                          variant="outlined"
                          placeholder="CEP"
                          helperText={errors.addresses && (errors.addresses[0] as Address | undefined)?.zipCode}
                          error={touched.addresses && touched.addresses[0]?.zipCode && !!(errors.addresses?.[0] as Address | undefined)?.zipCode}
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                        />
                      )}
                    </InputMask>
                  )}
                </Field>
              </Grid>
              <Grid item xs={4}>
                <Label>Rua</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[0] as Address | undefined)?.streetName}
                  error={touched.addresses && touched.addresses[0]?.streetName && !!(errors.addresses?.[0] as Address | undefined)?.streetName}
                  name="addresses.0.streetName"
                  placeholder="Rua"
                />
              </Grid>
              <Grid item xs={3}>
                <Label>Bairro</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[0] as Address | undefined)?.district}
                  error={touched.addresses && touched.addresses[0]?.district && !!(errors.addresses?.[0] as Address | undefined)?.district}
                  name="addresses.0.district"
                  placeholder="Bairro"
                />
              </Grid>
              <Grid item xs={2}>
                <Label>Número</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[0] as Address | undefined)?.number}
                  error={touched.addresses && touched.addresses[0]?.number && !!(errors.addresses?.[0] as Address | undefined)?.number}
                  name="addresses.0.number"
                  placeholder="Número"
                />
              </Grid>
              <Grid item xs={3}>
                <Label>Cidade</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[0] as Address | undefined)?.city}
                  error={touched.addresses && touched.addresses[0]?.city && !!(errors.addresses?.[0] as Address | undefined)?.city}
                  name="addresses.0.city"
                  placeholder="Cidade"
                />
              </Grid>
              <Grid item xs={3}>
                <Label>Estado</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[0] as Address | undefined)?.state}
                  error={touched.addresses && touched.addresses[0]?.state && !!(errors.addresses?.[0] as Address | undefined)?.state}
                  name="addresses.0.state"
                  placeholder="Estado"
                />
              </Grid>
              <Grid item xs={12} display="flex" alignItems="center">
                <Typography
                  variant="h5"
                  component="h1"
                  sx={{ mb: t => t.spacing(2), mr: t => t.spacing(2), display: 'inline' }}
                >
                  Endereço de atendimento
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ mb: t => t.spacing(2), display: 'inline' }}
                >
                  [opcional]
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Label>CEP</Label>
                <Field name="addresses.1.zipCode" componet={TextField} sx={{ borderRadius: 0 }}>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {({ field, form: { values } }: any) => (
                    <InputMask
                      {...field}
                      onChange={field.onChange}
                      mask="99999-999"
                      name="addresses.1.zipCode"
                      value={values?.addresses[1]?.zipCode}
                      sx={{ borderRadius: 0 }}
                    >
                      {(inputProps: InputBaseComponentProps) => (
                        <MTextField
                          type="text"
                          inputProps={inputProps}
                          fullWidth
                          variant="outlined"
                          placeholder="CEP"
                          helperText={errors.addresses && (errors.addresses[1] as Address | undefined)?.zipCode}
                          error={touched.addresses && touched.addresses[1]?.zipCode && !!(errors.addresses?.[1] as Address | undefined)?.zipCode}
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                        />
                      )}
                    </InputMask>
                  )}
                </Field>
              </Grid>
              <Grid item xs={4}>
                <Label>Rua</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[1] as Address | undefined)?.streetName}
                  error={touched.addresses && touched.addresses[1]?.streetName && !!(errors.addresses?.[1] as Address | undefined)?.streetName}
                  name="addresses.1.streetName"
                  placeholder="Rua"
                />
              </Grid>
              <Grid item xs={3}>
                <Label>Bairro</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[1] as Address | undefined)?.district}
                  error={touched.addresses && touched.addresses[1]?.district && !!(errors.addresses?.[1] as Address | undefined)?.district}
                  name="addresses.1.district"
                  placeholder="Bairro"
                />
              </Grid>
              <Grid item xs={2}>
                <Label>Número</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[1] as Address | undefined)?.number}
                  error={touched.addresses && touched.addresses[1]?.number && !!(errors.addresses?.[1] as Address | undefined)?.number}
                  name="addresses.1.number"
                  placeholder="Número"
                />
              </Grid>
              <Grid item xs={3}>
                <Label>Cidade</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[1] as Address | undefined)?.city}
                  error={touched.addresses && touched.addresses[1]?.city && !!(errors.addresses?.[1] as Address | undefined)?.city}
                  name="addresses.1.city"
                  placeholder="Cidade"
                />
              </Grid>
              <Grid item xs={3}>
                <Label>Estado</Label>
                <Field
                  fullWidth
                  component={TextFieldWrapper}
                  helperText={errors.addresses && (errors.addresses[1] as Address | undefined)?.state}
                  error={touched.addresses && touched.addresses[1]?.state && !!(errors.addresses?.[1] as Address | undefined)?.state}
                  name="addresses.1.state"
                  placeholder="Estado"
                />
              </Grid>
            </>
          )}
        />
      </Grid>
		</Stack>
	)
}
