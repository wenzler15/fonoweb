import { Editor, LoadingOverlay } from 'common/components'
import {
	Grid,
	AutocompleteRenderInputParams,
	TextField as MTextField,
	Button,
} from '@mui/material'
import { Autocomplete, TextField } from 'formik-mui'
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
import { Specialty } from 'specialty'
import { useSpecialties } from 'specialty/queries'
import { EvaluationFormProps } from 'evaluation/components/EvaluationForm/EvaluationForm.types'
import { useUniversalParam } from 'routes/hooks'

export function EvaluationForm({
	config: { canUseTemplate = true } = {},
}: EvaluationFormProps) {
	const {
		values: { template, patient },
		errors,
		touched,
		setFieldValue,
	} = useFormikContext<{
		patient: UserWithPatient | null
		template: Template | null
		specialty: Specialty | null
	}>()

	const patientId = useUniversalParam('patient')
	const templateId = useUniversalParam('template')

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
			</Grid>
			<LoadingOverlay show={templates.isLoading || patients.isLoading} />
			<TemplateSelector
				type={TemplateType.EVALUATION}
				visible={modalTemplates.visible}
				onClose={modalTemplates.hide}
				onSelect={handleTemplateChange}
			/>
		</>
	)
}
