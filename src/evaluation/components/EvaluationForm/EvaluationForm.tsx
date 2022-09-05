import { Editor, LoadingOverlay } from 'common/components'
import {
	Stack,
	Grid,
	AutocompleteRenderInputParams,
	TextField as MTextField,
	Button,
	Card,
	CardContent,
	Typography,
	Box,
	Paper,
} from '@mui/material'
import cuid from 'cuid'
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
import { useSearchParams } from 'react-router-dom'
import { Specialty } from 'specialty'
import { useSpecialties } from 'specialty/queries'
import { InferType } from 'yup'
import { ExerciseSchema } from 'evaluation/schemas'

const handleAddExercise =
	(push: (data: InferType<typeof ExerciseSchema>) => void) => () =>
		push({
			cuid: cuid(),
			title: '',
			description: '',
		})

export function EvaluationForm() {
	const {
		values: { template, patient, exercises },
		errors,
		touched,
		setFieldValue,
	} = useFormikContext<{
		patient: UserWithPatient | null
		template: Template | null
		exercises: InferType<typeof ExerciseSchema>[]
	}>()

	const [searchParams] = useSearchParams()
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
		if (searchParams.get('patient') && !patient) {
			setFieldValue(
				'patient',
				patients.data?.result.find(p => p.id === searchParams.get('patient')),
			)
		}
	}, [searchParams, patient, patients.data?.result, setFieldValue])

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

	useTemplateDetail(searchParams.get('template') as string, {
		enabled: !!searchParams.get('template'),
		onSuccess: ({ result }) => {
			handleTemplateChange(result)
		},
	})

	return (
		<Stack spacing={2}>
			<FieldArray
				name="exercises"
				render={({ push, remove }) => (
					<Card>
						<CardContent sx={{ p: t => t.spacing(2) }}>
							<Box
								sx={{
									mb: t => t.spacing(2),
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Typography variant="h5" component="h2" color="secondary">
									Exercícios
								</Typography>
								<Button
									color="secondary"
									startIcon={<Add />}
									onClick={handleAddExercise(push)}
								>
									ADICIONAR
								</Button>
							</Box>
							<Grid container spacing={2}>
								{exercises.map((exercise, index) => (
									<Grid item xs={6} key={exercise.cuid}>
										<Paper
											sx={{ p: t => t.spacing(2), position: 'relative' }}
											elevation={4}
											variant="outlined"
										>
											<Stack spacing={2}>
												<Field
													name={`exercises.${index}.title`}
													component={TextField}
													fullWidth
													label={`Pergunta ${index + 1}`}
													size="small"
												/>
												<Field
													name={`exercises.${index}.description`}
													component={TextField}
													fullWidth
													multiline
													label={`Resposta ${index + 1}`}
													size="small"
												/>
											</Stack>
											<Box
												onClick={() => remove(index)}
												sx={{
													width: 20,
													height: 20,
													position: 'absolute',
													top: -10,
													right: -10,
													bgcolor: 'error.main',
													color: '#FFF',
													borderRadius: '100%',
													cursor: 'pointer',
												}}
											>
												<Close fontSize="small" />
											</Box>
										</Paper>
									</Grid>
								))}
							</Grid>
						</CardContent>
					</Card>
				)}
			/>
			<Grid container spacing={2}>
				<Grid item xs={12} sx={{ textAlign: 'right' }}>
					<Button
						onClick={() => modalTemplates.show()}
						variant="contained"
						size="large"
						color="secondary"
					>
						Selecionar Modelo
					</Button>
				</Grid>
				<Grid item xs={4}>
					<Field fullWidth component={TextField} name="title" label="Título" />
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
								helperText={errors.patient}
								label="Especialidade"
								variant="outlined"
							/>
						)}
					/>
				</Grid>
				<Grid item xs={4}>
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
				</Grid>
			</Grid>
			<Editor name="text" editorState={editorState} />
			<LoadingOverlay show={templates.isLoading || patients.isLoading} />
			<TemplateSelector
				type={TemplateType.EVALUATION}
				visible={modalTemplates.visible}
				onClose={modalTemplates.hide}
				onSelect={handleTemplateChange}
			/>
		</Stack>
	)
}
