import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { UserWithPatient } from 'user/types'

export function PatientListActions({
  original: patient,
}: {
  original: UserWithPatient
}) {
  const navigate = useNavigate()

  return (
    <Stack
      spacing={2}
      justifyContent="flex-end"
      direction={{ xs: 'column', sm: 'row' }}
      width={400}
    >
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => navigate(`/anamnesis/create?patient=${patient.id}`)}
      >
        Nova Anamnese
      </Button>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={() => navigate(`/evaluations/create?patient=${patient.id}`)}
      >
        Nova Avaliação
      </Button>
      <Button
        variant="contained"
        size="small"
        color="inherit"
        onClick={() => navigate(`/evolutions/create?patient=${patient.patientData.id}`)}
      >
        Nova Consulta
      </Button>
    </Stack>
  )
}
