import {
	Stack,
	Grid,
	MenuItem,
	TextField as MTextField,
	InputBaseComponentProps,
} from '@mui/material'
import { Field, useFormikContext } from 'formik'
import {
	Label,
	LabelInfo,
	SelectWrapper,
	TextFieldWrapper,
} from './PatientForm.styles'
import InputMask from 'react-input-mask'
import { GenderType } from 'patient'
import { translateGenderType } from 'patient/utils'
import { TextField } from 'formik-mui'
import { useUniversalParam } from 'routes/hooks'
import { usePatientById } from 'patient/queries'
import { useEffect } from 'react'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export function PatientForm() {
	const { errors, touched, setFieldValue } = useFormikContext<{
		name: string
		gender: string
		email: string
		birthDate: Date | null
	}>()

  const patientId = useUniversalParam('patient')

  const patient = usePatientById(patientId as string);

  useEffect(() => {
		if (patientId && patient.data) {
      setFieldValue('name', patient.data.name)
      setFieldValue('email', patient.data.email)
      setFieldValue('gender', patient.data.gender)
      const dateFormated = format(utcToZonedTime(patient.data.birthDate as Date, 'UTC'), 'dd/MM/yyyy')
      setFieldValue('birthDate', dateFormated)
		}
	}, [patientId, patient.data, setFieldValue])

	return (
		<Stack spacing={2}>
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
				</Grid>
				<Grid
					item
					xs={6}
					sx={{
						'& .MuiFormControl-root': {
							width: '100%',
						},
					}}
				>
					<Label>Gênero do paciente [Biológico]</Label>
					<LabelInfo>Opcional</LabelInfo>
					<Field
						component={SelectWrapper}
						name="gender"
						sx={{ width: '100%' }}
						style={{ width: '100%' }}
						label="Sexo"
					>
						{Object.keys(GenderType).map(key => (
							<MenuItem key={key} value={key}>
								{translateGenderType(GenderType[key as GenderType])}
							</MenuItem>
						))}
					</Field>
				</Grid>
				<Grid item xs={6}>
					<Label>Data de nascimento</Label>
					<LabelInfo color="error">*Obrigatorio</LabelInfo>
					<Field name="birthDate" componet={TextField} sx={{ borderRadius: 0 }}>
						{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
						{({ field, form: { values } }: any) => (
							<InputMask
								{...field}
								onChange={field.onChange}
								mask="99/99/9999"
								name="birthDate"
								value={values.birthDate}
								sx={{ borderRadius: 0 }}
							>
								{(inputProps: InputBaseComponentProps) => (
									<MTextField
										type="text"
										inputProps={inputProps}
										fullWidth
										variant="outlined"
										label="Data de nascimento"
										helperText={errors.birthDate}
										error={touched.birthDate && !!errors.birthDate}
										sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
									/>
								)}
							</InputMask>
						)}
					</Field>
				</Grid>
				<Grid item xs={6}>
					<Label>Email de contato</Label>
					<LabelInfo>opcional</LabelInfo>
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
		</Stack>
	)
}
