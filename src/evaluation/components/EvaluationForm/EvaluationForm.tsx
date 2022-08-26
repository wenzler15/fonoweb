import { Editor, LoadingOverlay } from 'common/components'
import {
	Stack,
	Grid,
	AutocompleteRenderInputParams,
	TextField as MTextField,
	Button,
} from '@mui/material'
import { Autocomplete } from 'formik-mui'
import { Field, useFormikContext } from 'formik'
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

export function EvaluationForm() {
	const {
		values: { template },
		errors,
		touched,
		setFieldValue,
	} = useFormikContext<{
		patient: UserWithPatient | null
		template: Template | null
	}>()

	const [searchParams] = useSearchParams()
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
