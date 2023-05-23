/* eslint-disable react/jsx-no-useless-fragment */
import { LoadingButton } from '@mui/lab'
import { omit } from 'rambda'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { AnamnesisForm } from 'anamnesis/components'
import { useCreateAnamnesis } from 'anamnesis/mutations'
import { CreateAnamnesisSchema } from 'anamnesis/schemas'
import { Back, FloatingWhatsAppButton } from 'common/components'
import { NavBar } from 'components/navBar'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { useAuth } from 'auth/hooks/useAuth'

export function AnamnesisCreate() {
  const [pacientId, setPacientId] = useState("");

  const navigate = useNavigate()
  const { user } = useAuth()
  const createAnamnesis = useCreateAnamnesis({
    onSuccess: response => {
      navigate(`/patients/${pacientId}`)
      Swal.fire({
        title: 'Success',
        text: 'Anamnese criada com sucesso',
        icon: 'success',
      })
    },
  })

  const handleFormSubmit = async ({
    patient,
    specialty,
    ...values
  }: InferType<typeof CreateAnamnesisSchema>) => {
    setPacientId(patient.patientData.id)
    createAnamnesis.mutate({
      ...omit(['template'], values),
      patientId: patient.patientData.id,
      specialtyId: specialty.id,
      doctorId: user!.doctorData.id,
    })
  }

  return (
    <>
      <Formik<InferType<typeof CreateAnamnesisSchema>>
        validationSchema={CreateAnamnesisSchema}
        initialValues={{
          questions: [],
          text: '',
          // @ts-expect-error null
          patient: null,
          // @ts-expect-error null
          specialty: null,
        }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <>

            <Box sx={{ p: t => t.spacing(4) }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  color="secondary"
                  sx={{ mb: t => t.spacing(2) }}
                >
                  Criar anamnese
                  <Back />
                </Typography>
                <LoadingButton
                  onClick={() => handleSubmit()}
                  variant="contained"
                  color="secondary"
                  size="large"
                  loading={createAnamnesis.isLoading}
                >
                  SALVAR
                </LoadingButton>
              </Box>
              <Card>
                <CardContent sx={{ p: t => t.spacing(4) }}>
                  <AnamnesisForm />
                </CardContent>
              </Card>
            </Box>
          </>
        )}
      </Formik>

    </>
  )
}
