import { Editor, LoadingOverlay } from 'common/components'
import {
  Grid,
  AutocompleteRenderInputParams,
  TextField as MTextField,
  Button,
  Stack,
} from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { Autocomplete, TextField } from 'formik-mui'
import { Field, useFormikContext } from 'formik'
import { useTemplateDetail, useTemplates } from 'template/queries'
import { usePatients } from 'patient/queries'
import { UserWithPatient } from 'user/types'
import { Template, TemplateType } from 'template'
import { ContentState, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import Swal from 'sweetalert2'
import { format } from 'date-fns/fp'
import { useEffect, useState } from 'react'
import { useVisible } from 'common/hooks'
import { TemplateSelector } from 'template/components/TemplateSelector/TemplateSelector'
import { Specialty } from 'specialty'
import { useSpecialties } from 'specialty/queries'
import { EvaluationFormProps } from 'evaluation/components/EvaluationForm/EvaluationForm.types'
import { useUniversalParam } from 'routes/hooks'
import { useCreateTemplate } from 'template/mutations'
import { CreateTemplateDto, CreateTemplateSchema } from 'template/schemas'
import { TemplateForm } from 'template/components/TemplateForm/TemplateForm'

export function EvaluationForm({
  config: { canUseTemplate = true } = {},
}: EvaluationFormProps) {
  const {
    values: { template, patient, appointmentDate },
    errors,
    touched,
    setFieldValue,
  } = useFormikContext<{
    appointmentDate: Date
    patient: UserWithPatient | null
    template: Template | null
    specialty: Specialty | null
  }>()

  const [showModal, setShowModal] = useState(false);

  const patientId = useUniversalParam('patient')
  const templateId = useUniversalParam('template')

  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty(),
  )

  const [searchParams] = useSearchParams()

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

  const createTemplate = useCreateTemplate({
    onSuccess: () => {
      setShowModal(false)
      Swal.fire({
        title: 'Success',
        text: 'Modelo criado com sucesso',
        icon: 'success',
      })
    },
  })

  const handleFormSubmit = async ({
    specialty,
    ...values
  }: CreateTemplateDto) => {
    await createTemplate
      .mutateAsync({
        ...values,
        specialtyId: specialty.id,
      })
      .catch(console.error)
  }

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
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <Field
                sx={{ width: '60%' }}
                component={TextField}
                name="title"
                label="Título da avaliação"
              />
              {canUseTemplate && (
                <Button
                  sx={{ width: '20%' }}
                  onClick={() => modalTemplates.show()}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Selecionar Modelo
                </Button>
              )}
              <Button
                onClick={() => setShowModal(true)}
                variant="contained"
                size="large"
                color="secondary"
              >
                Criar Modelo
              </Button>
            </Stack>
          </Grid>
          {showModal && (
            <div style={{ background: '#fff', position: 'absolute', width: '90%', padding: 20, border: '1px solid #000', borderRadius: 10, zIndex: 1, marginTop: 50 }}>
              <div onClick={() => setShowModal(false)} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: 20, cursor: 'pointer' }}>
                <div style={{ border: '1px solid #FFF', borderRadius: 20, width: 30, height: 30, background: '#ff4040' }}>
                  <p style={{ fontSize: 16, marginLeft: 9, marginTop: 2, color: '#fff' }}>X</p>
                </div>
              </div>
              <TemplateForm<CreateTemplateDto>
                schema={CreateTemplateSchema}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onSubmit={handleFormSubmit}
                initialValues={{
                  title: '',
                  html: '',
                  // @ts-expect-error null
                  type: null,
                  // @ts-expect-error null
                  specialty: specialties.data?.result,
                }}
              />
            </div>
          )}
          <Grid item xs={4} style={{ opacity: showModal ? 0.5 : 1 }}>
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
            <MTextField
              fullWidth
              disabled
              label="Data da consulta"
              value={format('dd/MM/yyyy', appointmentDate)}
            />
          </Grid>
          <Grid item xs={4} style={{ opacity: showModal ? 0.5 : 1 }}>
            {/* {patientId && (
              <MTextField
                fullWidth
                disabled
                label="Paciente"
                value={
                  patients.data?.result[0].name
                }
              />
            )} */}
            <Field
              fullWidth
              disabled={searchParams.get('patient') ? true : false}
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
        {!showModal && (
          <Grid item xs={12}>
            <Editor name="text" editorState={editorState} />
          </Grid>
        )}
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
