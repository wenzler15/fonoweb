/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
import { format } from 'date-fns/fp'
import { Autocomplete, TextField } from 'formik-mui'
import { Field, FieldArray, useFormikContext } from 'formik'
import { WithCuid } from 'common/types'
import { Question } from 'anamnesis/types'
import { usePatients } from 'patient/queries'
import { UserWithPatient } from 'user/types'
import { Template, TemplateType } from 'template'
import { ContentState, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { useVisible } from 'common/hooks'
import { TemplateSelector } from 'template/components/TemplateSelector/TemplateSelector'
import { useTemplateDetail } from 'template/queries'
import { useSearchParams } from 'react-router-dom'
import { useSpecialties } from 'specialty/queries'
import { Specialty } from 'specialty'
import { api } from "../../../services";
import { TemplateForm } from 'template/components/TemplateForm/TemplateForm'
import { CreateTemplateDto, CreateTemplateSchema } from 'template/schemas'
import { useCreateTemplate } from 'template/mutations'

const handleAddQuestion = (push: (data: WithCuid<Question>) => void) => () =>
  push({
    cuid: cuid(),
    question: '',
    answers: '',
  })

export function AnamnesisForm() {
  const [models, setModels] = useState("");
  const [modelsToShow, setModelsToShow] = useState("")
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [searchParams] = useSearchParams()
  const {
    values: { questions, template, patient, appointmentDate },
    errors,
    touched,
    setFieldValue,
  } = useFormikContext<{
    appointmentDate: Date
    questions: WithCuid<Question>[]
    patient: UserWithPatient | null
    template: Template | null
  }>()

  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty(),
  )

  const getTemps = async () => {
    const userString = localStorage.getItem('@fonoweb/auth');
    const userJson = JSON.parse(userString)

    const resp = await api.get('/templates?size=9999&page=1', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userJson.state.token}`
      }
    })

    setModels(resp.data.result)
  };

  useEffect(() => {
    if (models) {
      const arr = [];
      models.map((item) => {
        if (item.specialtyId === especialidadeSelecionada.id) {
          arr.push(item);
        }
      });
      setModelsToShow(arr)
    }
  }, [especialidadeSelecionada]);

  useEffect(() => {
    getTemps();
  }, []);

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

  const modalTemplates = useVisible()

  const specialties = useSpecialties({
    page: 1,
    size: 9999,
  })

  const patients = usePatients({
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

  const handleTemplateSelect = () => {
    modalTemplates.show()
  }

  const handleTemplateChange = async ({ html }: any) => {
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
      modalTemplates.hide()
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

  useTemplateDetail(searchParams.get('template') as string, {
    enabled: !!searchParams.get('template'),
    onSuccess: ({ result }) => {
      handleTemplateChange(result)
    },
  })

  useEffect(() => {
    if (template) {
      handleTemplateChange(template)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [template])

  return (
    <Stack spacing={2}>
      {/* <FieldArray
        name="questions"
        render={({ push, remove }) => (
          <Card style={{ opacity: showModal ? 0.5 : 1 }}>
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
                          name={`questions.${index}.answers`}
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
      /> */}
      <Grid container spacing={2} style={{ opacity: showModal ? 0.5 : 1 }}>
        <Grid item xs={4}>
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

        <Grid item xs={4}>
          <MTextField
            fullWidth
            disabled
            label="Data da consulta"
            value={format('dd/MM/yyyy', new Date())}
          />
        </Grid>
        <Grid item xs={4}>
          <Field
            fullWidth
            name="specialty"
            component={Autocomplete}
            options={specialties.data?.result ?? []}
            getOptionLabel={(option: Specialty) => option.name}
            value={especialidadeSelecionada.id}
            onChange={(e, value) => setEspecialidadeSelecionada(value)}
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
        <Grid item xs={2} sx={{ textAlign: 'right' }}>
          <Button
            onClick={handleTemplateSelect}
            variant="contained"
            size="large"
            color="secondary"
          >
            Selecionar Modelo
          </Button>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: 'right' }}>
          <Button
            onClick={() => setShowModal(true)}
            variant="contained"
            size="large"
            color="secondary"
          >
            Criar Modelo
          </Button>
        </Grid>
      </Grid>
      {showModal && (
        <div style={{ background: '#fff', position: 'absolute', width: '90%', padding: 20, border: '1px solid #000', borderRadius: 10 }}>
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
      {modelsToShow !== '' && modelsToShow.length > 0 ? modelsToShow.map((item) => (
        <div style={{ border: '1px solid #CCC', width: '50%', padding: 10, borderRadius: 10, cursor: 'pointer' }} onClick={() => {
          const blocksFromHtml = htmlToDraft(item.html)
          const { contentBlocks, entityMap } = blocksFromHtml
          const contentState = ContentState.createFromBlockArray(
            contentBlocks,
            entityMap,
          )
          const newEditorState = EditorState.createWithContent(contentState)
          setEditorState(newEditorState)
          setFieldValue('text', item.html)
        }}>
          <p> {item.specialty.name} </p>
          {item.html.split('>')[1].split('<')[0]}
        </div>
      )) : (
        <> </>
      )}
      {!showModal && (
        <Editor name="text" editorState={editorState} />
      )}
      <LoadingOverlay show={patients.isLoading} />
      <TemplateSelector
        type={TemplateType.ANAMNESIS}
        visible={modalTemplates.visible}
        onClose={modalTemplates.hide}
        onSelect={handleTemplateChange}
      />
    </Stack>
  )
}
