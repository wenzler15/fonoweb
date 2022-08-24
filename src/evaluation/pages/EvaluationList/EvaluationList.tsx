import { NavBar } from 'components/navBar'
import { ReactElement, useState } from 'react'
import { FloatingWhatsAppButton } from 'common/components'
import { useNavigate, Link } from 'react-router-dom'
import { Pagination } from 'common/types'
import { Container, CustomArrowRight, CustomButton } from './EvaluationList.styles'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, Typography, useTheme } from '@mui/material'
import { useSpecialties } from 'specialty/queries'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useEvaluations } from 'evaluation/queries'

export function EvaluationList(): ReactElement {
		const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 10,
	})

	const theme = useTheme()
	const navigate = useNavigate()
  const [specialty, setSpecialty] = useState<string>()
	const evaluations = useEvaluations({
    ...pagination,
    page: pagination.page + 1,
    specialtyId: specialty,
  })

  const specialties = useSpecialties({
		page: 1,
		size: 9999,
	})

	return (
		<Container>
			<NavBar />
      <Box sx={{ p: theme.spacing(4), pb: theme.spacing(9) }}>
        <Paper
					elevation={3}
					sx={{ p: t => t.spacing(2), mb: t => t.spacing(2) }}
				>
					<Typography
						variant="h6"
						component="h2"
						color="secondary"
						sx={{ mb: theme.spacing(2) }}
					>
						Filtros
					</Typography>
					<Stack spacing={2} direction="row">
						<FormControl fullWidth>
							<InputLabel>Especialidade</InputLabel>
							<Select
								label="Especialidade"
								onChange={({ target }) => setSpecialty(target.value as string)}
							>
								{specialties.data?.result.map(s => (
									<MenuItem key={s.id} value={s.id}>
										{s.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Stack>
				</Paper>
        <Paper
					elevation={3}
					sx={{ p: t => t.spacing(2), mb: t => t.spacing(2) }}
				>
          <Grid container mb={8}>
            <Grid item xs={10}>
              <Typography
								variant="h5"
								component="h1"
								color="secondary"
							>
								Avaliações
							</Typography>
              <Typography
								variant="body2"
								component="span"
								color="secondary"
								sx={{ mb: theme.spacing(2) }}
							>
								Avaliações personalizadas
							</Typography>
              <CustomButton
                onClick={() => navigate("/templates/evaluation/avaliable")}
              >
                Buscar modelos de avaliações disponiveis
                <CustomArrowRight />
              </CustomButton>
            </Grid>
            <Grid item xs={2} sx={{ textAlign: 'right'}}>
              <Button
              sx={{ borderRadius: 0 }}
                variant="contained"
                size="large"
                color="primary"
                onClick={() => navigate('/templates/create')}
              >
                EXPORTAR
              </Button>
            </Grid>
          </Grid>
          {evaluations.data?.result.map((evaluation) => (
            <Grid container mb={6} key={evaluation.id}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="h3"
                >
                  Avaliação {evaluation.specialty.name}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                >
                  {evaluation.patient.user.name}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ textAlign: 'left' }}
                >
                  <Button
                    size='small'
                    startIcon={<ArrowCircleDownIcon />}
                    variant="outlined"
                    sx={{ borderRadius: 0 }}
                  >
                    Baixar
                  </Button>
                  <Button
                    size='small'
                    sx={{ borderRadius: 0 }}
                    variant="outlined"
                  >
                    Excluir
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          ))}
          <Button
            variant='contained'
            fullWidth
            type="button"
            size='large'
            onClick={() => navigate('/evaluations/create')}
          >
            Criar avaliação personalizada
          </Button>
        </Paper>
      </Box>
      <FloatingWhatsAppButton />
		</Container>
	)
}
