/* eslint-disable @typescript-eslint/prefer-optional-chain */
import { LoadingButton } from '@mui/lab'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { ExerciseForm } from 'exercise/components'
import { useCreateExercise } from 'exercise/mutations'
import { CreateExerciseSchema } from 'exercise/schemas'
import { Back } from 'common/components'
import { Formik } from 'formik'
import { useNavigate, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InferType } from 'yup'
import { useAuthStore } from 'auth/providers'
import { UserWithDoctor } from 'user/types'
import { Specialty } from '@prisma/client'
import { api } from 'services'

export function ExerciseCreate() {
  const navigate = useNavigate()
  const params = useLocation()


  const createExercise = useCreateExercise({
    onSuccess: () => {
      navigate('/exercises')
      Swal.fire({
        title: 'Success',
        text: 'Exercício criado com sucesso',
        icon: 'success',
      })
    },
  })

  const user = useAuthStore(state => state.user) as UserWithDoctor

  const handleFormSubmit = ({
    specialty,
    ...values
  }: InferType<typeof CreateExerciseSchema>) => {
    createExercise.mutate({
      ...values,
      specialty: {
        connect: {
          id: specialty.id,
        },
      },
      creator: {
        connect: {
          id: user.id,
        },
      },
    })
  }

  const handleUpdate = async ({
    specialty,
    ...values
  }: InferType<typeof CreateExerciseSchema>) => {
    try {
      const userString = localStorage.getItem('@fonoweb/auth');
      const userJson = JSON.parse(userString)

      const { description, links, title } = values

      const toSend = {
        title,
        links,
        description,
        creator: {
          connect: {
            id: user.id
          },
        },
        specialty: {
          connect: {
            id: specialty.id,
          },
        }
      }

      await api.patch(`exercises/${params.state.data.id}`, toSend, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userJson.state.token}`
        }
      });

      navigate('/exercises')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Formik<InferType<typeof CreateExerciseSchema>>
      validationSchema={CreateExerciseSchema}
      initialValues={{
        specialty: params.state && params.state.data ? params.state.data.specialty : null as unknown as Specialty,
        title: params.state && params.state.data ? params.state.data.title : '',
        description: params.state && params.state.data ? params.state.data.description : '',
        links: params.state && params.state.data ? params.state.data.links : [''],
      }}
      onSubmit={params.state && params.state.data ? handleUpdate : handleFormSubmit}
    >
      {({ handleSubmit }) => (
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
              {params.state ? 'Alterar exercício' : 'Novo exercício'}
              <Back />
            </Typography>
            <LoadingButton
              onClick={() => handleSubmit()}
              variant="contained"
              color="secondary"
              size="large"
              loading={createExercise.isLoading}
            >
              SALVAR
            </LoadingButton>
          </Box>
          <Card>
            <CardContent sx={{ p: t => t.spacing(4) }}>
              <ExerciseForm />
            </CardContent>
          </Card>
        </Box>
      )}
    </Formik>
  )
}
