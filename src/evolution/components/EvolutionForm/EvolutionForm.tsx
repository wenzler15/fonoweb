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
  Select as SelectMui,
  SelectChangeEvent,
  Autocomplete as MAutocomplete,
  ListItem,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material'
import cuid from 'cuid'
import { DesktopDatePicker } from 'formik-mui-x-date-pickers'
import { Add, Close } from '@mui/icons-material'
import { Autocomplete, Select, TextField } from 'formik-mui'
import { Field, FieldArray, useFormikContext } from 'formik'
import { usePatients } from 'patient/queries'
import { UserWithPatient } from 'user/types'
import React, { useEffect } from 'react'
import { useVisible } from 'common/hooks'
import { Specialty } from 'specialty'
import { useSpecialties } from 'specialty/queries'
import { InferType } from 'yup'
import { ExerciseSchema } from 'evolution/schemas'
import { EvolutionFormProps } from 'evolution/components/EvolutionForm/EvolutionForm.types'
import { useUniversalParam } from 'routes/hooks'
import { format } from 'date-fns/fp'
import { useAuthStore } from 'auth/providers'
import { useFindManyExercises } from 'exercise/queries'
import { Exercise } from '@prisma/client'
import { len } from '@excelsia/general-helpers'

const handleAddExercise =
  (push: (data: InferType<typeof ExerciseSchema>) => void) => () =>
    push({
      cuid: cuid(),
      title: '',
      description: '',
      links: ['']
    })

export function EvolutionForm({
  config: { canChangeAppointmentDate = true } = {},
}: EvolutionFormProps) {
  const {
    values: { patient, exercises: formExercises, appointmentDate },
    errors,
    touched,
    setFieldValue,
  } = useFormikContext<{
    appointmentDate: Date
    patient: UserWithPatient | null
    specialty: Specialty | null
    exercises: InferType<typeof ExerciseSchema>[]
  }>()

  const patientId = useUniversalParam('patient')
  const commentInput = useVisible()
  const user = useAuthStore(state => state.user) as unknown as UserWithPatient

  const specialties = useSpecialties({
    page: 1,
    size: 9999,
  })

  const patients = usePatients({
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

  const exercises = useFindManyExercises({
    where: {
      creatorId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const handleSelectOldExercise = (exercise: Exercise | null): void => {
    if (!exercise) {
      return
    }

    if (
      formExercises.filter(e => e.links?.some(l => l!.length > 0)).length === 0
    ) {
      setFieldValue('exercises', [
        {
          cuid: cuid(),
          title: exercise.title,
          description: exercise.description,
          links: exercise.links,
        },
      ])
      return
    }

    setFieldValue('exercises', [
      ...formExercises,
      {
        cuid: cuid(),
        title: exercise.title,
        description: exercise.description,
        links: exercise.links,
      },
    ])
  }

  const [specialtyFilter, setSpecialtyFilter] = React.useState(0);
  const [filteredExercises, setFilteredExercises] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSpecialtyFilter(event.target.value);
  };

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
            <Field
              fullWidth
              component={TextField}
              name="title"
              label="Título da consulta"
            />
          </Grid>
          <Grid item xs={4}>
            {canChangeAppointmentDate && (
              <MTextField
                fullWidth
                disabled
                label="Data da consulta"
                value={format('dd/MM/yyyy', appointmentDate)}
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
                  error={touched.specialty && !!errors.specialty}
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
          <Editor name="text" />
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
                    {/* {!commentInput.visible && (
                      <Button
                        size="large"
                        color="secondary"
                        onClick={commentInput.show}
                      >
                        Adicionar Comentário
                      </Button>
                    )} */}
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

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel>Especialidade</InputLabel>
                      <SelectMui
                        value={specialtyFilter}
                        onChange={handleChange}
                        label="Speciality"
                        style={{ width: '250px', marginLeft: 10, paddingRight: 10 }}
                      >
                        <MenuItem value="0"> Todas</MenuItem>
                        {specialties.data?.result && specialties.data?.result.map((item) => (
                          <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                        ))}
                      </SelectMui>
                    </FormControl>
                    <CardContent sx={{ p: t => t.spacing(2) }}>
                      <Box mb={2}>
                        <MAutocomplete<Exercise>
                          fullWidth
                          onChange={(_, e) => handleSelectOldExercise(e)}
                          autoHighlight
                          options={specialtyFilter === "0" ? exercises.data?.result ?? [] : exercises.data?.result.filter((item) => item.specialty.id === specialtyFilter)}
                          getOptionLabel={option => option.title}
                          renderOption={(props, option) => (
                            <Box component="li" {...props} key={option.id}>
                              {option.title}
                            </Box>
                          )}
                          renderInput={params => (
                            <MTextField
                              {...params}
                              label="Pesquisar exercícios"
                            />
                          )}
                        />
                      </Box>
                      <Stack spacing={2}>
                        {formExercises.map((exercise, index) => (
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
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ p: t => t.spacing(2) }}
                            >
                              <Field
                                name={`exercises.${index}.comments`}
                                component={TextField}
                                fullWidth
                                label={`Comentário do exercício ${index + 1}`}
                                size="small"
                              />
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
                                    {exercise.links?.map((link, linkIndex) => (
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
                                            len(exercise.links) - 1 && (
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
      <LoadingOverlay show={exercises.isLoading || patients.isLoading} />
    </>
  )
}
