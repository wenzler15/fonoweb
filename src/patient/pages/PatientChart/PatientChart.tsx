import { NavBar } from 'components/navBar'
import { ReactElement, useState } from 'react'
import { FloatingWhatsAppButton} from 'common/components'
import { useTheme, Box, Typography, Grid, Button, Paper, Avatar, Collapse } from '@mui/material'
import { CollapseButton, CustomArrowDown, CustomArrowRight } from './PatientChart.styles'
import { PatientChartInfo } from './PatientChartInfo'
import { useParams } from 'react-router-dom';
import { useEvaluations } from 'evaluation/queries'
import { useAnamnesis } from 'anamnesis/queries'
import { usePatientById } from 'patient/queries'
import { NotFound } from './NotFound'

export function PatientChart(): ReactElement {
	const theme = useTheme()
  const [showAnamnese, setShowAnamnese] = useState<boolean>(true)
  const [showEvaluation, setShowEvaluation] = useState<boolean>(true)
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const patient = usePatientById(id!);

  const evaluations = useEvaluations({
		size: 999,
    page: 1,
		patientId: id,
	})

  const anamneses = useAnamnesis({
		size: 999,
    page: 1,
		patientId: id,
	})

  const handleShowAnamnese = () => {
		setShowAnamnese(oldState => !oldState)
	}
	const handleShowEvaluation = () => {
		setShowEvaluation(oldState => !oldState)
	}

  if (patient.isError) {
    return (
      <>
        <NavBar />
        <NotFound />
      </>
    );
  }

	return (
		<>
			<NavBar />
			<Box sx={{ p: theme.spacing(4), pb: theme.spacing(2) }}>
        <Paper elevation={2} sx={{ p: theme.spacing(4) }}>
          <Grid container>
            <Grid item xs={9}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {/* TODO: GET FROM API */}
              <Avatar
                alt="Remy Sharp"
                src="https://i.picsum.photos/id/416/200/300.jpg?hmac=KIMUiPYQ0X2OQBuJIwtfL9ci1AGeu2OqrBH4GqpE7Bc"
                sx={{ width: 56, height: 56, mr: theme.spacing(3) }}
              />
              <Typography
                variant="h5"
                component="h1"
              >
                Rafael Cardoso
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: 'right'}}>
              <Button
                sx={{ borderRadius: 0, pl: theme.spacing(6), pr: theme.spacing(6) }}
                variant="contained"
                size="large"
                color="secondary"
              >
                Exportar Completo
              </Button>
            </Grid>
          </Grid>
        </Paper>
			</Box>
      <Box sx={{ p: theme.spacing(4), pb: theme.spacing(9) }}>
        <Paper elevation={2} sx={{ p: theme.spacing(4) }}>
          <Grid container sx={{ mb: theme.spacing(6) }}>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                component="h3"
                color="secondary"
                sx={{ mb: theme.spacing(2) }}
              >
                Rafael Cardoso - 21 anos
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{ mb: theme.spacing(2) }}
              >
                1,82 - 70kg
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{ mb: theme.spacing(2) }}
              >
                Telefone: (55) 3333-4444
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{ mb: theme.spacing(4) }}
              >
                Rua ficticia, bairro na Cidade DF
              </Typography>
              <Typography
                variant="h6"
                component="h3"
              >
                Resumo do paciente
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ mb: theme.spacing(2), color: '#AAAAAA' }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ mb: theme.spacing(10) }}>
            <Grid item xs={6}>
              <CollapseButton onClick={handleShowAnamnese}>
                Anamnese do paciente
                {showAnamnese ? (
                  <CustomArrowDown />
                ) : (
                  <CustomArrowRight />
                )}
              </CollapseButton>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Button
                color='primary'
                variant='contained'
                size='medium'
                sx={{ borderRadius: 0 }}
              >
                Baixar Anamnese
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Collapse
                in={showAnamnese}
                timeout="auto"
                unmountOnExit
              >
                {anamneses.data?.result && anamneses.data.result.length > 0 ?
                 anamneses.data.result.map((anamnese) => (
                  <PatientChartInfo key={anamnese.id} data={anamnese} type="anamnese" />
                )) : (
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      mb: theme.spacing(2),
                      ml: theme.spacing(1),
                      color: '#AAAAAA',
                      display: 'inline'
                    }}
                  >
                    Não encontrado
                  </Typography>
                )}
              </Collapse>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <CollapseButton onClick={handleShowEvaluation}>
                Consultas
                {showEvaluation ? (
                  <CustomArrowDown />
                ) : (
                  <CustomArrowRight />
                )}
              </CollapseButton>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Button
                color='primary'
                variant='contained'
                size='medium'
                sx={{ borderRadius: 0 }}
              >
                Nova Consulta
              </Button>
            </Grid>
          </Grid>
          <Collapse
            in={showEvaluation}
            timeout="auto"
            unmountOnExit
          >
            {(evaluations.data?.result && evaluations.data.result.length > 0) ?
              evaluations.data.result.map((evaluation) => (
              <PatientChartInfo key={evaluation.id} data={evaluation} type="evaluation" />
            )) : (
              <Typography
                variant="body1"
                component="p"
                sx={{
                  mb: theme.spacing(2),
                  ml: theme.spacing(1),
                  color: '#AAAAAA',
                  display: 'inline'
                }}
              >
                Não encontrado
              </Typography>
            )}

          </Collapse>
        </Paper>
      </Box>
      <FloatingWhatsAppButton />
		</>
	)
}
