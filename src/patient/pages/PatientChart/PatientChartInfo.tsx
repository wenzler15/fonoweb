import { useTheme, Box, Typography, Grid, Button, Stack, Chip } from '@mui/material'
import { PatientChartInfoProps } from 'patient'
import React from 'react'

export function PatientChartInfo({ type, data }: PatientChartInfoProps) {
	const theme = useTheme()

	return (
    <Box key={data.id} sx={{ mb: theme.spacing(6) }}>
      <Grid container sx={{ mb: theme.spacing(2) }}>
        <Grid item xs={6}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              variant="h6"
              component="h3"
            >
              {`${type === 'anamnese' ? 'Anamnesis' : 'Consulta'}`} {data.numericId}
            </Typography>
            <Chip label="23 de Dezembro" color="primary" size='small' />
          </Stack>
          <Typography
            variant="h6"
            component="p"
            sx={{ display: 'inline' }}
          >
            Evolução:
          </Typography>
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
            {data.text ?? 'Não informado'}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
      {data.questions ? data.questions.map((question) => (
        <React.Fragment key={question.cuid}>
          <Grid
            item
            xs={6}
            sx={{
              pt: theme.spacing(2),
              borderLeft: 2,
              borderColor: theme.palette.primary.main,
              pl: theme.spacing(4),
              mb: theme.spacing(6)
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                variant="h6"
                component="h3"
              >
                {question.question}
              </Typography>
              <Chip label="23 de Dezembro" color="primary" size='small' />
            </Stack>
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
              {question.answer}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display:'flex' }}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              color='primary'
              variant='contained'
              size='medium'
              sx={{ borderRadius: 0 }}
            >
              Baixar Arquivo
            </Button>
          </Grid>
        </React.Fragment>
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
      </Grid>
    </Box>
	)
}
