import {
	Stack,
	Grid,
	MenuItem,
	TextField as MTextField,
	InputBaseComponentProps,
	Paper,
	Typography,
	FormControlLabel,
	Checkbox,
} from '@mui/material'
import { Field, FieldProps, FormikErrors, useFormikContext } from 'formik'
import {
	Label,
	LabelInfo,
	SelectWrapper,
	TextFieldWrapper,
} from './PatientForm.styles'
import states from 'common/data/states.json'
import InputMask from 'react-input-mask'
import { Gender } from 'patient'
import { translateGenderType } from 'patient/utils'
import { TextField } from 'formik-mui'
import { useUniversalParam } from 'routes/hooks'
import { usePatientById } from 'patient/queries'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { InferType } from 'yup'
import { CreatePatientSchema } from 'patient/schemas'

export function PatientForm() {
	const { errors, touched, values, setFieldValue } =
		useFormikContext<InferType<typeof CreatePatientSchema>>()
	const [useAlwaysFullName, setUseAlwaysFullName] = useState(false)

	const patientId = useUniversalParam('patient')

	const patient = usePatientById(patientId as string)

	useEffect(() => {
		if (useAlwaysFullName) {
			setFieldValue('socialName', values.name)
		}
	}, [values.name, useAlwaysFullName, setFieldValue])

	useEffect(() => {
		if (patientId && patient.data) {
			setFieldValue('name', patient.data.name)
			setFieldValue('email', patient.data.email)
			setFieldValue('gender', patient.data.gender)
			if (patient.data.birthDate) {
				const dateFormated = format(
					utcToZonedTime(patient.data.birthDate, 'UTC'),
					'dd/MM/yyyy',
				)
				setFieldValue('birthDate', dateFormated)
			}
		}
	}, [patientId, patient.data, setFieldValue])

	return (
		<Stack>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Label>Nome Completo</Label>
					<LabelInfo color="error">*Obrigatorio</LabelInfo>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.name && !!errors.name}
						helperText={errors.name}
						name="name"
						label="Nome"
					/>
					<FormControlLabel
						control={<Checkbox />}
						label="Usar sempre este nome"
						checked={useAlwaysFullName}
						onChange={e =>
							setUseAlwaysFullName(
								(e.target as unknown as { checked: boolean }).checked,
							)
						}
					/>
				</Grid>
				<Grid item xs={6}>
					<Label>Nome Social</Label>
					<Field
						fullWidth
						component={TextFieldWrapper}
						error={touched.socialName && !!errors.socialName}
						helperText={errors.socialName}
						name="socialName"
						disabled={useAlwaysFullName}
						label="Nome Social"
					/>
				</Grid>
				<Grid item xs={6}>
					<Label>Gênero do paciente [Biológico]</Label>
					<LabelInfo color="error">*Obrigatorio</LabelInfo>
					<Field
						component={SelectWrapper}
						name="gender"
						label="Sexo"
						formControl={{ fullWidth: true }}
					>
						{Object.keys(Gender).map(key => (
							<MenuItem key={key} value={key}>
								{translateGenderType(Gender[key as Gender])}
							</MenuItem>
						))}
					</Field>
				</Grid>
				<Grid item xs={6}>
					<Label>Gênero que se identifica</Label>
					<LabelInfo>Opcional</LabelInfo>
					<Field
						fullWidth
						component={TextFieldWrapper}
						name="customGender"
						label="Gênero que se identifica"
					/>
				</Grid>
				<Grid item xs={6}>
					<Label>Data de nascimento</Label>
					<LabelInfo color="error">*Obrigatorio</LabelInfo>
					<Field name="birthDate" componet={TextField}>
						{({ field }: FieldProps<InferType<typeof CreatePatientSchema>>) => (
							<InputMask
								{...field}
								mask="99/99/9999"
								name="birthDate"
								value={values.birthDate.toString()}
							>
								{
									// @ts-expect-error - The type of the field is not compatible with the type of the component
									(inputProps: InputBaseComponentProps) => (
										<MTextField
											type="text"
											inputProps={inputProps}
											fullWidth
											variant="outlined"
											label="Data de nascimento"
											helperText={errors.birthDate as FormikErrors<string>}
											error={touched.birthDate && !!errors.birthDate}
										/>
									)
								}
							</InputMask>
						)}
					</Field>
				</Grid>
				<Grid item xs={6}>
					<Label>Email</Label>
					<LabelInfo color="error">*Obrigatorio</LabelInfo>
					<Field
						fullWidth
						name="email"
						type="email"
						error={touched.email && !!errors.email}
						helperText={errors.email}
						component={TextFieldWrapper}
						placeholder="Email"
					/>
				</Grid>
			</Grid>
			<Paper
				variant="outlined"
				sx={{ px: 2, py: 3, width: '100%', marginTop: 4 }}
			>
				<Typography variant="h5" sx={{ mb: 2 }}>
					Endereço <LabelInfo color="error">*Obrigatorio</LabelInfo>
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Label>CEP</Label>
						<Field name="address.zipCode" componet={TextField}>
							{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
							{({ field }: any) => (
								<InputMask
									{...field}
									onChange={field.onChange}
									mask="99999-999"
									name="address.zipCode"
								>
									{(inputProps: InputBaseComponentProps) => (
										<MTextField
											type="text"
											inputProps={inputProps}
											fullWidth
											variant="outlined"
											placeholder="CEP"
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
							name="address.streetName"
							placeholder="Rua"
						/>
					</Grid>
					<Grid item xs={4}>
						<Label>Bairro</Label>
						<Field
							fullWidth
							component={TextFieldWrapper}
							name="address.district"
							placeholder="Bairro"
						/>
					</Grid>
					<Grid item xs={2}>
						<Label>Número</Label>
						<Field
							fullWidth
							component={TextFieldWrapper}
							name="address.number"
							placeholder="Número"
						/>
					</Grid>
					<Grid item xs={4}>
						<Label>Cidade</Label>
						<Field
							fullWidth
							component={TextFieldWrapper}
							name="address.city"
							placeholder="Cidade"
						/>
					</Grid>
					<Grid item xs={3}>
						<Label>Complemento</Label>
						<Field
							fullWidth
							component={TextFieldWrapper}
							name="address.complement"
							placeholder="Complemento"
						/>
					</Grid>
					<Grid item xs={3}>
						<Label>Estado</Label>
						<Field
							component={SelectWrapper}
							name="address.state"
							label="Estado"
							formControl={{ fullWidth: true }}
						>
							{states.map(({ name, abbr }) => (
								<MenuItem key={abbr} value={abbr}>
									{name}
								</MenuItem>
							))}
						</Field>
					</Grid>
				</Grid>
			</Paper>
		</Stack>
	)
}
