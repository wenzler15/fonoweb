import {
	AutocompleteRenderInputParams,
	Grid,
	IconButton,
	Stack,
	TextField as MTextField,
} from '@mui/material'
import { Autocomplete, TextField } from 'formik-mui'
import { Field, FieldArray, useFormikContext } from 'formik'
import { Close, Add } from '@mui/icons-material'
import { useSpecialties } from 'specialty/queries'
import { Specialty } from '@prisma/client'
import { Upload } from 'common/formik'

function useFieldValue<T>(key: string): T {
	const { values } = useFormikContext<Record<string, unknown>>()
	return values[key] as T
}

function useErrors(key: string): string | undefined {
	const { errors } = useFormikContext<Record<string, unknown>>()
	return errors[key]
}

function useTouched(key: string): boolean | undefined {
	const { touched } = useFormikContext<Record<string, unknown>>()
	return touched[key]
}

export function ExerciseForm() {
	const links = useFieldValue<string[]>('links')
	const specialtyErrors = useErrors('specialties')
	const specialtyTouched = useTouched('specialties')
	const specialties = useSpecialties({ page: 1, size: 9999 })

	return (
		<Grid container spacing={2}>
			<Grid item xs={7}>
				<Field fullWidth component={TextField} name="title" label="Título" />
			</Grid>
			<Grid item xs={5}>
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
							error={specialtyTouched && !!specialtyErrors}
							helperText={specialtyErrors}
							label="Especialidade"
							variant="outlined"
						/>
					)}
				/>
			</Grid>
			<Grid item xs={12}>
				<Field
					multiline
					fullWidth
					component={TextField}
					name="description"
					label="Descrição"
					rows={2}
				/>
			</Grid>
			<Grid item xs={12}>
				<Upload label="Capa" multiple={false} name="cover" />
			</Grid>
			<Grid item xs={12} container spacing={2}>
				<FieldArray name="links">
					{linksField =>
						links.map((_link, linkIndex) => (
							// eslint-disable-next-line react/no-array-index-key
							<Grid key={linkIndex} item xs={6}>
								<Stack
									direction="row"
									alignItems="flex-start"
									spacing={1}
									sx={{ width: '100%' }}
								>
									<Field
										name={`links.${linkIndex}`}
										component={TextField}
										fullWidth
										label={`Link ${linkIndex + 1}`}
										size="small"
									/>
									{linkIndex > 0 && (
										<IconButton
											onClick={() => linksField.remove(linkIndex)}
											color="error"
										>
											<Close />
										</IconButton>
									)}
									{linkIndex === links.length - 1 && (
										<IconButton
											onClick={() => linksField.push('')}
											color="primary"
										>
											<Add />
										</IconButton>
									)}
								</Stack>
							</Grid>
						))
					}
				</FieldArray>
			</Grid>
		</Grid>
	)
}
