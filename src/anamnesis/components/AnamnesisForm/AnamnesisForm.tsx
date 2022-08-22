import { Editor, LoadingOverlay } from 'common/components'
import { Add, Close } from '@mui/icons-material'
import {
	Stack,
	Card,
	CardContent,
	Box,
	Typography,
	Button,
	Paper,
	Grid,
	AutocompleteRenderInputParams,
	TextField as MTextField,
} from '@mui/material'
import cuid from 'cuid'
import { Autocomplete, TextField } from 'formik-mui'
import { Field, FieldArray, useFormikContext } from 'formik'
import { WithCuid } from 'common/types'
import { Question } from 'anamnesis/types'
import { useTemplates } from 'template/queries'
import { usePatients } from 'patient/queries'
import { UserWithPatient } from 'user/types'
import { Template } from 'template'
import { ContentState, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'

const handleAddQuestion = (push: (data: WithCuid<Question>) => void) => () =>
	push({
		cuid: cuid(),
		question: '',
		answer: '',
	})

export function AnamnesisForm() {
	const {
		values: { questions, template, ...a },
		errors,
		touched,
		setFieldValue,
	} = useFormikContext<{
		questions: WithCuid<Question>[]
		patient: UserWithPatient | null
		template: Template | null
	}>()

	const [editorState, setEditorState] = useState<EditorState>(() =>
		EditorState.createEmpty(),
	)

	const patients = usePatients({
		page: 1,
		size: 9999,
	})

	const templates = useTemplates({
		page: 1,
		size: 9999,
	})

	useEffect(() => {
		if (template) {
			handleTemplateChange(template)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [template])

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

	return (
		<Stack spacing={2}>
			<FieldArray
				name="questions"
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
									Perguntas
								</Typography>
								<Button
									color="secondary"
									startIcon={<Add />}
									onClick={handleAddQuestion(push)}
								>
									ADICIONAR
								</Button>
							</Box>
							<Grid container spacing={2}>
								{questions.map((question, index) => (
									<Grid item xs={6} key={question.cuid}>
										<Paper
											sx={{ p: t => t.spacing(2), position: 'relative' }}
											elevation={4}
											variant="outlined"
										>
											<Stack spacing={2}>
												<Field
													name={`questions.${index}.question`}
													component={TextField}
													fullWidth
													label={`Pergunta ${index + 1}`}
													size="small"
												/>
												<Field
													name={`questions.${index}.answer`}
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
				<Grid item xs={6}>
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
				<Grid item xs={6}>
					<Field
						fullWidth
						name="template"
						component={Autocomplete}
						options={templates.data?.result ?? []}
						getOptionLabel={(option: Template) => option.title}
						renderInput={(params: AutocompleteRenderInputParams) => (
							<MTextField
								{...params}
								name="template-search"
								error={touched.template && !!errors.template}
								helperText={errors.template}
								label="Template"
								variant="outlined"
							/>
						)}
					/>
				</Grid>
			</Grid>
			<Editor name="text" editorState={editorState} />
			<LoadingOverlay show={templates.isLoading || patients.isLoading} />
		</Stack>
	)
}
