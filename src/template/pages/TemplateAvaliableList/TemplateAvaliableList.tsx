import { NavBar } from 'components/navBar'
import { ReactElement, useState } from 'react'
import { FloatingWhatsAppButton } from 'common/components'
import { Container } from './TemplateAvaliableList.styles'
import { useParams, Link } from 'react-router-dom';
import { useTemplates } from 'template/queries'
import {
	useTheme,
	Paper,
	Box,
	Typography,
	Stack,
  Grid,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material'
import { Template, TemplateType } from 'template/types';
import { useSpecialties } from 'specialty/queries';


function renderRow(template: Template) {
	return (
			<Grid container spacing={2} mb={6} key={template.id}>
        <Grid item xs={12}>
        <Typography
            variant="h5"
            component="h2"
          >
            {template.title}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <p dangerouslySetInnerHTML={{ __html: template.html }}></p>
        </Grid>
        <Grid item xs={2}>
          <Stack justifyContent="flex-end" spacing={2} alignItems="flex-end" direction="row">
            <Button sx={{ borderRadius: 0 }} variant="contained" size="medium">Visualizar</Button>
            <Button
              sx={{ borderRadius: 0 }}
              color="secondary"
              variant="contained"
              size="medium"
              type="button"
            >
              <Link
                to={`/templates/create?specialty=${template.specialtyId}`}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Usar
              </Link>
              </Button>
          </Stack>
        </Grid>
      </Grid>
	)
}

type TemplateParams = {
  type: TemplateType;
};


export function TemplateAvaliableList(): ReactElement {
  const { type: specialtyType } = useParams<TemplateParams>();

	const [specialty, setSpecialty] = useState<string>()
	const [type, setType] = useState<TemplateType>(specialtyType!.toUpperCase() as TemplateType)

	const theme = useTheme()

  const specialties = useSpecialties({
		page: 1,
		size: 9999,
	})

	const templates = useTemplates({
    page: 1,
    size: 9999,
		type,
		specialtyId: specialty,
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
						component="h1"
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
								{specialties.data?.result.map(specialty => (
									<MenuItem key={specialty.id} value={specialty.id}>
										{specialty.name}
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
          <Grid container spacing={2} mb={8}>
				    <Grid item xs={6}>
              <Typography
                variant="h5"
                component="h1"
                color="secondary"
                sx={{ mb: theme.spacing(2) }}
              >
                Modelos de Avaliação Disponíveis
              </Typography>
            </Grid>
				    <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Button sx={{ borderRadius: 0 }} variant="contained" size="medium">Exportar</Button>
            </Grid>
          </Grid>

          {templates.data?.result.map(template => (renderRow(template)))}
				</Paper>
			</Box>
      <FloatingWhatsAppButton />
		</Container>
	)
}
