import { ChangeEvent } from 'react'
import {
	Stack,
	Grid,
  MenuItem,
} from '@mui/material'
import { Field, useFormikContext } from 'formik'
import { Label, LabelInfo, SelectWrapper, TextFieldWrapper } from './PatientForm.styles'
import InputMask from 'react-input-mask';

const GENDERS = [
  {
    id: 'masculino',
    label: 'Masculino'
  },
  {
    id: 'feminino',
    label: 'Feminino'
  }
]

export function PatientForm() {
	const {
    values: { gender },
		errors,
		touched,
    setFieldValue,
	} = useFormikContext<{
		name: string
    gender: string;
    email: string;
    birthday: string;
	}>()


	return (
		<Stack spacing={2}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
          <Label>Nome Completo</Label>
          <LabelInfo color='error'>*Obrigatorio</LabelInfo>
          <Field
            fullWidth
            // value={name}
            type="text"
            name="name"
            onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('name', event.currentTarget.value)}
            error={touched.name && !!errors.name}
            helperText={errors.name}
            component={TextFieldWrapper}
            placeholder="Nome Completo"
          />
				</Grid>
        <Grid item xs={6}>
          <Label>Gênero do paciente [Biológico]</Label>
          <LabelInfo>Opcional</LabelInfo>
          <Field
						fullWidth
						name="gender"
            value={gender}
						component={SelectWrapper}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => setFieldValue('GENDERS', event.target.value)}
					>
            {GENDERS.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
				</Grid>
        <Grid item xs={6}>
          <Label>Data de nascimento</Label>
          <LabelInfo color='error'>*Obrigatorio</LabelInfo>
          <Field
            name="birthday"
            componet={TextFieldWrapper}
          >
            {() => (
            <InputMask
              mask="99/99/9999"
              onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('birthday', event.currentTarget.value)}
            >
              {() =>
                <TextFieldWrapper
                  type="text"
                  fullWidth
                  variant="outlined"
                  helperText={errors.birthday}
                  error={touched.birthday && !!errors.birthday}
                />
              }
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
            error={touched.email && !!errors.email}
            helperText={errors.email}
            component={TextFieldWrapper}
            placeholder="Email"
            onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('email', event.currentTarget.value)}
          />
				</Grid>
			</Grid>
		</Stack>
	)
}
