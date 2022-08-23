import { LoadingButton } from '@mui/lab'
import {
	Stack,
	Box,
	Card,
	CardContent,
	Typography,
	useTheme,
	TextField as MTextField,
	AutocompleteRenderInputParams,
	Grid,
	MenuItem,
} from '@mui/material'
import { InputFile } from 'common/components'
import DOMPurify from 'dompurify'
import { convertToHTML } from 'draft-convert'
import { ContentState, EditorState } from 'draft-js'
import { Field, Formik } from 'formik'
import { TextField, Autocomplete, Select } from 'formik-mui'
import htmlToDraft from 'html-to-draftjs'
import { ReactElement, useLayoutEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { TemplateFormProps } from 'template/components/TemplateForm/TemplateForm.types'
import { CreateTemplateDto, UpdateTemplateDto } from 'template/schemas'
import { usePdfToHtml } from 'template/mutations'
import { Editor } from 'react-draft-wysiwyg'
import { useSpecialties } from 'specialty/queries'
import { Specialty } from 'specialty'
import { TemplateType } from 'template/types'
import { translateTemplateType } from 'template/utils'

export function TemplateForm<
	T extends CreateTemplateDto | Partial<UpdateTemplateDto> | UpdateTemplateDto,
>({ onSubmit, schema, initialValues }: TemplateFormProps<T>): ReactElement {
	const pdfToHtml = usePdfToHtml()
	const specialties = useSpecialties({ page: 1, size: 9999 })
	const theme = useTheme()

	const [editorState, setEditorState] = useState<EditorState>(() =>
		EditorState.createEmpty(),
	)

	useLayoutEffect(() => {
		if (initialValues.html && initialValues.html.length > 0) {
			const blocksFromHtml = htmlToDraft(initialValues.html)
			const { contentBlocks, entityMap } = blocksFromHtml
			const contentState = ContentState.createFromBlockArray(
				contentBlocks,
				entityMap,
			)
			setEditorState(EditorState.createWithContent(contentState))
		}
	}, [initialValues.html])

	const editorStateToHtml = (currentEditorState: EditorState) => {
		const contentState = currentEditorState.getCurrentContent()
		const html = convertToHTML(contentState)

		// eslint-disable-next-line unicorn/no-unsafe-regex
		if (html.replace(/<p>(\s+)?<\/p>/g, '').length === 0) {
			return ''
		}

		return DOMPurify.sanitize(html)
	}

	const handleFileChange = async (files: File[]) => {
		const file = files[0] as File | undefined

		if (!file) {
			return undefined
		}

		if (file.type !== 'application/pdf') {
			return Swal.fire({
				title: 'Ops!',
				text: 'O arquivo deve ser do tipo PDF',
				icon: 'warning',
				confirmButtonText: 'OK',
			})
		}

		try {
			const response = await pdfToHtml.mutateAsync(file)
			const blocksFromHtml = htmlToDraft(response.result)
			const { contentBlocks, entityMap } = blocksFromHtml
			const contentState = ContentState.createFromBlockArray(
				contentBlocks,
				entityMap,
			)
			const newEditorState = EditorState.createWithContent(contentState)
			setEditorState(newEditorState)
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
		<Formik<T>
			validationSchema={schema}
			enableReinitialize
			initialValues={initialValues}
			onSubmit={onSubmit}
		>
			{({
				setFieldValue,
				isSubmitting,
				handleSubmit,
				handleBlur,
				errors,
				touched,
			}) => (
				<Stack spacing={2}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<Field
									fullWidth
									component={TextField}
									name="title"
									label="Título"
								/>
							</Grid>
							<Grid
								item
								xs={4}
								sx={{ '& .MuiFormControl-root': { width: '100%' } }}
							>
								<Field
									component={Select}
									name="type"
									label="Tipo"
									sx={{ width: '100%' }}
									style={{ width: '100%' }}
								>
									{Object.keys(TemplateType).map(key => (
										<MenuItem key={key} value={key}>
											{translateTemplateType(TemplateType[key as TemplateType])}
										</MenuItem>
									))}
								</Field>
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
											name="template-search"
											error={touched.specialty && !!errors.specialty}
											helperText={errors.specialty as string}
											label="Especialidade"
											variant="outlined"
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12}>
								<Stack
									direction="row"
									spacing={2}
									sx={{ justifyContent: 'flex-end', width: '100%' }}
								>
									<InputFile
										accept="application/pdf"
										onChange={files => {
											void handleFileChange(files)
										}}
									/>
									<LoadingButton
										size="large"
										variant="contained"
										color="primary"
										loading={isSubmitting}
										onClick={() => handleSubmit()}
									>
										SALVAR
									</LoadingButton>
								</Stack>
							</Grid>
						</Grid>
					</Box>
					<Card
						sx={{
							border:
								errors.html && touched.html
									? `2px solid ${theme.palette.error.main}`
									: '',
						}}
					>
						<CardContent>
							<Editor
								onBlur={handleBlur('html')}
								editorState={editorState}
								onEditorStateChange={newEditorState => {
									setEditorState(newEditorState)
									setFieldValue('html', editorStateToHtml(newEditorState), true)
								}}
								editorClassName="editor-class"
								toolbarClassName="toolbar-class"
							/>
							{errors.html && touched.html && (
								<Typography
									color="error"
									variant="subtitle2"
									sx={{ mt: theme.spacing(1), mb: theme.spacing(-1) }}
								>
									{/* @ts-expect-error normal */}
									{errors.html}
								</Typography>
							)}
						</CardContent>
					</Card>
				</Stack>
			)}
		</Formik>
	)
}
