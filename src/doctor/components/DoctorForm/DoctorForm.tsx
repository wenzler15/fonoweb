import {
	Stack,
	Box,
	Typography,
	Grid,
	TextField as MTextField,
  InputBaseComponentProps,
} from '@mui/material'
import { TextField } from 'formik-mui'
import { Field, useFormikContext } from 'formik'
import { Label, TextFieldWrapper } from './DoctorForm.styles'
import InputMask from 'react-input-mask'

export function DoctorForm() {
	const { errors, touched } = useFormikContext<{
		name: string
		email: string
		cpf: string
		streetName: string
		district: string
		zipCode: string
		number: string
		city: string
		state: string
    workStreetName: string
		workDistrict: string
		workZipCode: string
		workNumber: string
		workCity: string
		workState: string
	}>()

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
        <Box width="100%"/>
        <Grid item xs={3}>
					<Label>CEP</Label>
					<Field name="zip_code" componet={TextField} sx={{ borderRadius: 0 }}>
						{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
						{({ field, form: { values } }: any) => (
							<InputMask
								{...field}
								onChange={field.onChange}
								mask="99999-999"
								name="zipCode"
								value={values.zipCode}
								sx={{ borderRadius: 0 }}
							>
								{(inputProps: InputBaseComponentProps) => (
									<MTextField
										type="text"
										inputProps={inputProps}
										fullWidth
										variant="outlined"
										placeholder="CEP"
										helperText={errors.zipCode}
										error={touched.zipCode && !!errors.zipCode}
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
						error={touched.streetName && !!errors.streetName}
						helperText={errors.streetName}
						name="streetName"
						placeholder="Rua"
					/>
				</Grid>
        <Grid item xs={3}>
					<Label>Bairro</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.district && !!errors.district}
						helperText={errors.district}
						name="district"
						placeholder="Bairro"
					/>
				</Grid>
        <Grid item xs={2}>
					<Label>Número</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.number && !!errors.number}
						helperText={errors.number}
						name="number"
						placeholder="Número"
					/>
				</Grid>
        <Grid item xs={3}>
					<Label>Cidade</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.city && !!errors.city}
						helperText={errors.city}
						name="city"
						placeholder="Cidade"
					/>
				</Grid>
        <Grid item xs={3}>
					<Label>Estado</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.state && !!errors.state}
						helperText={errors.state}
						name="state"
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
					<Field name="workZipCode" componet={TextField} sx={{ borderRadius: 0 }}>
						{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
						{({ field, form: { values } }: any) => (
							<InputMask
								{...field}
								onChange={field.onChange}
								mask="99999-999"
								name="workZipCode"
								value={values.workZipCode}
								sx={{ borderRadius: 0 }}
							>
								{(inputProps: InputBaseComponentProps) => (
									<MTextField
										type="text"
										inputProps={inputProps}
										fullWidth
										variant="outlined"
										placeholder="CEP"
										helperText={errors.workZipCode}
										error={touched.workZipCode && !!errors.workZipCode}
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
						error={touched.workStreetName && !!errors.workStreetName}
						helperText={errors.workStreetName}
						name="workStreetName"
						placeholder="Rua"
					/>
				</Grid>
        <Grid item xs={3}>
					<Label>Bairro</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.workDistrict && !!errors.workDistrict}
						helperText={errors.workDistrict}
						name="workDistrict"
						placeholder="Bairro"
					/>
				</Grid>
        <Grid item xs={2}>
					<Label>Número</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.workNumber && !!errors.workNumber}
						helperText={errors.workNumber}
						name="workNumber"
						placeholder="Número"
					/>
				</Grid>
        <Grid item xs={3}>
					<Label>Cidade</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.workCity && !!errors.workCity}
						helperText={errors.workCity}
						name="workCity"
						placeholder="Cidade"
					/>
				</Grid>
        <Grid item xs={3}>
					<Label>Estado</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.workState && !!errors.workState}
						helperText={errors.workState}
						name="workState"
						placeholder="Estado"
					/>
				</Grid>
			</Grid>
		</Stack>
	)
}
