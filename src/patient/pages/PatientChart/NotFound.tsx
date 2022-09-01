import { useTheme, Typography, Paper, Box } from '@mui/material'

export function NotFound() {
	const theme = useTheme()

	return (
    <Box sx={{ p: theme.spacing(4), pb: theme.spacing(2) }}>
      <Paper elevation={2} sx={{ p: theme.spacing(4), textAlign: 'center' }}>
          <Typography
            variant="h5"
            component="h1"
          >
            Paciente não encontrado
          </Typography>
      </Paper>
    </Box>
	)
}
