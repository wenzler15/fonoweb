import { Add, Close } from '@mui/icons-material'
import {
	Button,
	Grid,
	Paper,
	Typography,
	TextField as MuiTextField,
	AutocompleteRenderInputParams,
} from '@mui/material'
import { Stack } from '@mui/system'
import { Specialty } from '@prisma/client'
import { Upload } from 'common/formik'
import { LessonSchema } from 'course/schemas'
import cuid from 'cuid'
import { Field, FieldArray, useFormikContext } from 'formik'
import { Autocomplete, TextField } from 'formik-mui'
import { useSpecialties } from 'specialty/queries'
import { InferType } from 'yup'

export function CourseForm() {
	const form = useFormikContext<{
		specialtyId: string
		lessons: InferType<typeof LessonSchema>[]
	}>()
	const specialties = useSpecialties({
		page: 1,
		size: 9999,
	})

	return (
		<Grid container columnSpacing={2} rowSpacing={4}>
			<Grid item xs={12}>
				<Field fullWidth component={TextField} name="title" label="Título" />
			</Grid>
			<Grid item xs={6}>
				<Field
					fullWidth
					name="specialty"
					value={
						specialties.data?.result.find(
							s => s.id === form.values.specialtyId,
						) ?? ''
					}
					isOptionEqualToValue={(option: Specialty, value: string) =>
						option.id === value
					}
					onChange={(_e: unknown, value: Specialty | null) =>
						form.setFieldValue('specialtyId', value?.id)
					}
					component={Autocomplete}
					options={specialties.data?.result ?? []}
					loading={specialties.isLoading}
					getOptionLabel={(option: Specialty | undefined) => option?.name ?? ''}
					renderInput={(params: AutocompleteRenderInputParams) => (
						<MuiTextField
							{...params}
							name="specialty-search"
							error={form.touched.specialtyId && !!form.errors.specialtyId}
							helperText={form.errors.specialtyId}
							label="Especialidade"
							variant="outlined"
						/>
					)}
				/>
			</Grid>
			<Grid item xs={6}>
				<Upload name="cover" label="Capa do curso" multiple={false} />
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
				<Stack spacing={4}>
					<FieldArray name="lessons">
						{l => (
							<>
								{form.values.lessons.map((lesson, li) => (
									<Paper key={lesson.cuid} variant="outlined" sx={{ p: 2 }}>
										<Typography
											component="div"
											sx={{
												mb: 2,
												fontSize: '1.25rem',
												lineHeight: 1,
												fontWeight: 'bold',
												display: 'flex',
												alignItems: 'center',
											}}
										>
											Lição {li + 1}
											{li !== 0 && (
												<Typography
													component="span"
													onClick={() => l.remove(li)}
													sx={{
														display: 'inline-block',
														fontSize: '0.75rem',
														color: t => t.palette.error.main,
														ml: 2,
														cursor: 'pointer',
													}}
												>
													<Close />
												</Typography>
											)}
										</Typography>
										<Stack spacing={2}>
											<Field
												fullWidth
												component={TextField}
												name={`lessons.${li}.title`}
												label="Título"
											/>
											<FieldArray name={`lessons.${li}.videos`}>
												{v => (
													<>
														{lesson.videos.map((video, vi) => (
															<Paper
																key={video.cuid}
																variant="outlined"
																sx={{ p: 2 }}
															>
																<Typography
																	component="div"
																	sx={{
																		fontSize: '1.25rem',
																		lineHeight: 1,
																		fontWeight: 'bold',
																		display: 'flex',
																		alignItems: 'center',
																	}}
																>
																	Video {vi + 1}
																	{vi !== 0 && (
																		<Typography
																			component="span"
																			onClick={() => v.remove(vi)}
																			sx={{
																				display: 'inline-block',
																				fontSize: '0.75rem',
																				color: t => t.palette.error.main,
																				ml: 2,
																				cursor: 'pointer',
																			}}
																		>
																			<Close />
																		</Typography>
																	)}
																</Typography>
																<Typography sx={{ fontSize: '0.75rem', mb: 2 }}>
																	LIÇÃO {li + 1}
																</Typography>
																<Grid container spacing={2}>
																	<Grid item xs={6}>
																		<Field
																			fullWidth
																			sx={{ flexGrow: 1 }}
																			component={TextField}
																			name={`lessons.${li}.videos.${vi}.title`}
																			label={`Título do video ${vi + 1}`}
																		/>
																	</Grid>
																	<Grid
																		item
																		xs={6}
																		display="flex"
																		alignItems="center"
																	>
																		<Field
																			fullWidth
																			sx={{ flexGrow: 1 }}
																			component={TextField}
																			name={`lessons.${li}.videos.${vi}.link`}
																			label={`Link do vídeo ${vi + 1}`}
																		/>
																	</Grid>
																</Grid>
															</Paper>
														))}
														<Button
															variant="contained"
															color="secondary"
															fullWidth
															size="large"
															onClick={() =>
																v.push({
																	link: '',
																	cuid: cuid(),
																	title: '',
																})
															}
														>
															Adicionar vídeo
														</Button>
													</>
												)}
											</FieldArray>
										</Stack>
									</Paper>
								))}
								<Paper
									variant="outlined"
									sx={{
										p: 2,
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
										backgroundColor: t => t.palette.grey[200],
										height: 250,
										cursor: 'pointer',
									}}
									onClick={() =>
										l.push({
											cuid: cuid(),
											title: '',
											videos: [
												{
													cuid: cuid(),
													link: '',
													title: '',
												},
											],
										})
									}
								>
									<Add
										sx={{
											width: 100,
											height: 100,
											color: t => t.palette.grey[500],
										}}
									/>
									<Typography
										component="div"
										sx={{ mt: 2, fontSize: '1.25rem' }}
									>
										Adicionar lição
									</Typography>
								</Paper>
							</>
						)}
					</FieldArray>
				</Stack>
			</Grid>
		</Grid>
	)
}
