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
          sx={{ borderRadius: 0 }}
          onClick={() => navigate(`/anamnesis/create?patient=${patient.id}`)}
        >
          Nova Anamnese
        </Button>
        <Button
           variant="contained"
           size="small"
           color="secondary"
           sx={{ borderRadius: 0 }}
           onClick={() => navigate(`/evaluations/create?patient=${patient.id}`)}
        >
          Nova Avaliação
        </Button>
        <Button
           variant="contained"
           size="small"
           color="inherit"
           sx={{ borderRadius: 0 }}
        >
          Nova Consulta
        </Button>
      </Stack>
	)
}
