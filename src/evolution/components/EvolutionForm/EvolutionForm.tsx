import { Editor, LoadingOverlay } from 'common/components'
import {
	Stack,
	Grid,
	AutocompleteRenderInputParams,
	TextField as MTextField,
	Card,
	CardContent,
	Typography,
	Box,
	Button,
	IconButton,
	Paper,
} from '@mui/material'
import cuid from 'cuid'
import { DesktopDatePicker } from 'formik-mui-x-date-pickers'
import { Add, Close } from '@mui/icons-material'
import { Autocomplete, TextField } from 'formik-mui'
import { Field, FieldArray, useFormikContext } from 'formik'
import { useTemplateDetail, useTemplates } from 'template/queries'
import { usePatients } from 'patient/queries'
import { UserWithPatient } from 'user/types'
import { Template, TemplateType } from 'template'
import { ContentState, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { useVisible } from 'common/hooks'
import { TemplateSelector } from 'template/components/TemplateSelector/TemplateSelector'
import { Specialty } from 'specialty'
import { useSpecialties } from 'specialty/queries'
import { InferType } from 'yup'
import { ExerciseSchema } from 'evolution/schemas'
import { EvolutionFormProps } from 'evolution/components/EvolutionForm/EvolutionForm.types'
import { useUniversalParam } from 'routes/hooks'
import { format } from 'date-fns/fp'

const handleAddExercise =
	(push: (data: InferType<typeof ExerciseSchema>) => void) => () =>
		push({
			cuid: cuid(),
			title: '',
			description: '',
			links: [],
		})

export function EvolutionForm({
	config: { canUseTemplate = true, canChangeAppointmentDate = true } = {},
}: EvolutionFormProps) {
	const {
		values: { template, patient, exercises, appointmentDate, ...v },
		errors,
		touched,
		setFieldValue,
	} = useFormikContext<{
		appointmentDate: Date
		patient: UserWithPatient | null
		template: Template | null
		specialty: Specialty | null
		exercises: InferType<typeof ExerciseSchema>[]
	}>()

	const patientId = useUniversalParam('patient')
	const templateId = useUniversalParam('template')
	const commentInput = useVisible()

	const [editorState, setEditorState] = useState<EditorState>(() =>
		EditorState.createEmpty(),
	)

	const specialties = useSpecialties({
		page: 1,
		size: 9999,
	})

	const patients = usePatients({
		page: 1,
		size: 9999,
	})

	const templates = useTemplates({
		page: 1,
		size: 9999,
	})

	useEffect(() => {
		if (patientId && !patient) {
			setFieldValue(
				'patient',
				patients.data?.result.find(p => p.patientData.id === patientId),
			)
		}
	}, [patientId, patient, patients.data?.result, setFieldValue])

	const handleTemplateChange = async ({ html }: Template) => {
		try {
			const blocksFromHtml = htmlToDraft(html)
			const { contentBlocks, entityMap } = blocksFromHtml
			const contentState = ContentState.createFromBlockArray(
				contentBlocks,
				entityMap,
			)
			const newEditorState = EditorState.createWithContent(contentState)
			setEditorState(newEditorState)
			setFieldValue('text', html)
		} catch (error) {
			console.error(error)
			return Swal.fire({
				title: 'Ops!',
				text: 'Não foi possível utilizar o PDF para edição. Tente novamente.',
				icon: 'error',
				confirmButtonText: 'Voltar',
			})
		}

		return undefined
	}

	const modalTemplates = useVisible()

	useEffect(() => {
		if (template) {
			handleTemplateChange(template)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [template])

	useTemplateDetail(templateId as string, {
		enabled: !!templateId,
		onSuccess: ({ result }) => {
			handleTemplateChange(result)
		},
	})

	return (
		<>
			<Grid container spacing={2}>
				<Grid
					item
					xs={12}
					container
					spacing={2}
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item xs={canUseTemplate ? 6 : 12}>
						<Field
							fullWidth
							component={TextField}
							name="title"
							label="Título"
						/>
					</Grid>
					{canUseTemplate && (
						<Grid item xs={6} sx={{ textAlign: 'right' }}>
							<Button
								onClick={() => modalTemplates.show()}
								variant="contained"
								size="large"
								color="secondary"
							>
								Selecionar Modelo
							</Button>
						</Grid>
					)}
					<Grid item xs={4}>
						{canChangeAppointmentDate && (
							<Field
								component={DesktopDatePicker}
								textField={{
									fullWidth: true,
								}}
								name="appointmentDate"
								label="Data da consulta"
								inputFormat="dd/MM/yyyy"
							/>
						)}
						{!canChangeAppointmentDate && (
							<MTextField
								fullWidth
								disabled
								label="Data da consulta"
								value={format('dd/MM/yyyy', appointmentDate)}
							/>
						)}
					</Grid>
					<Grid item xs={4}>
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
									error={touched.patient && !!errors.patient}
									helperText={errors.specialty}
									label="Especialidade"
									variant="outlined"
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						{patientId && (
							<MTextField
								fullWidth
								disabled
								label="Paciente"
								value={
									patients.data?.result.find(
										p => p.patientData.id === patientId,
									)?.name
								}
							/>
						)}
						{!patientId && (
							<Field
								fullWidth
								name="patient"
								component={Autocomplete}
								options={patients.data?.result ?? []}
								getOptionLabel={(option: UserWithPatient) => option.name}
								renderInput={(params: AutocompleteRenderInputParams) => (
									<MTextField
										{...params}
										name="patient-search"
										error={touched.patient && !!errors.patient}
										helperText={errors.patient}
										label="Paciente"
										variant="outlined"
									/>
								)}
							/>
						)}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Editor name="text" editorState={editorState} />
				</Grid>
				<Grid item xs={12}>
					<FieldArray
						name="exercises"
						render={({ push, remove }) => (
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<Typography variant="h5" component="h2" color="secondary">
										Adicionar exercícios
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Stack
										direction="row"
										spacing={2}
										sx={{ justifyContent: 'flex-end' }}
									>
										{!commentInput.visible && (
											<Button
												size="large"
												color="secondary"
												onClick={commentInput.show}
											>
												Adicionar Comentário
											</Button>
										)}
										<Button
											variant="contained"
											size="large"
											color="secondary"
											onClick={handleAddExercise(push)}
										>
											Adicionar Exercicio
										</Button>
									</Stack>
								</Grid>
								{commentInput.visible && (
									<Grid item xs={12}>
										<Field
											fullWidth
											component={TextField}
											name="comments"
											label="Comentário"
											multiline
											rows={4}
										/>
									</Grid>
								)}
								<Grid item xs={12}>
									<Card sx={{ overflow: 'visible' }}>
										<CardContent sx={{ p: t => t.spacing(2) }}>
											<Stack spacing={2}>
												{exercises.map((exercise, index) => (
													<Paper variant="outlined" key={exercise.cuid}>
														<Stack
															direction="row"
															spacing={2}
															sx={{ p: t => t.spacing(2) }}
														>
															<Field
																name={`exercises.${index}.title`}
																component={TextField}
																fullWidth
																label={`Título do exercício ${index + 1}`}
																size="small"
															/>
															<Stack
																direction="row"
																spacing={1}
																sx={{ width: '100%' }}
															>
																<Field
																	name={`exercises.${index}.description`}
																	component={TextField}
																	fullWidth
																	multiline
																	label={`Descrição do exerício ${index + 1}`}
																	size="small"
																/>
																{index > 0 && (
																	<IconButton
																		onClick={() => remove(index)}
																		color="error"
																	>
																		<Close />
																	</IconButton>
																)}
															</Stack>
														</Stack>
														<Box sx={{ p: t => t.spacing(2), pt: 0 }}>
															<FieldArray
																name={`exercises.${index}.links`}
																render={linksField => (
																	<Grid
																		container
																		item
																		xs={12}
																		key={exercise.cuid}
																		spacing={2}
																		sx={{ position: 'relative' }}
																	>
																		{exercise.links.map((link, linkIndex) => (
																			<Grid key={link} item xs={6}>
																				<Stack
																					direction="row"
																					spacing={1}
																					sx={{ width: '100%' }}
																				>
																					<Field
																						name={`exercises.${index}.links.${linkIndex}`}
																						component={TextField}
																						fullWidth
																						label="Link"
																						size="small"
																					/>
																					{linkIndex > 0 && (
																						<IconButton
																							onClick={() =>
																								linksField.remove(linkIndex)
																							}
																							color="error"
																						>
																							<Close />
																						</IconButton>
																					)}
																					{linkIndex ===
																						exercise.links.length - 1 && (
																						<IconButton
																							onClick={() =>
																								linksField.push('')
																							}
																							color="primary"
																						>
																							<Add />
																						</IconButton>
																					)}
																				</Stack>
																			</Grid>
																		))}
																	</Grid>
																)}
															/>
														</Box>
													</Paper>
												))}
											</Stack>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						)}
					/>
				</Grid>
			</Grid>
			<LoadingOverlay show={templates.isLoading || patients.isLoading} />
			<TemplateSelector
				type={TemplateType.EVOLUTION}
				visible={modalTemplates.visible}
				onClose={modalTemplates.hide}
				onSelect={handleTemplateChange}
			/>
		</>
	)
}
