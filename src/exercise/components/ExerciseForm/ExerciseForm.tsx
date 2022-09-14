import { Grid, IconButton, Stack } from '@mui/material'
import { TextField } from 'formik-mui'
import { Field, FieldArray, useFormikContext } from 'formik'
import { Close, Add } from '@mui/icons-material'

function useFieldValue<T>(key: string): T {
	const { values } = useFormikContext<Record<string, unknown>>()
	return values[key] as T
}

export function ExerciseForm() {
	const links = useFieldValue<string[]>('links')

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Field fullWidth component={TextField} name="title" label="Título" />
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
