import { NavBar } from 'components/navBar'
import { ReactElement, useState } from 'react'
import { FloatingWhatsAppButton } from 'common/components'
import { useNavigate, Link } from 'react-router-dom'
import { Pagination } from 'common/types'
import { Container, CustomArrowRight, CustomButton, CustomArrowDown } from './styles'
import { useAnamnesis } from 'anamnesis/queries'
import {
  Collapse,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  useTheme,
  Modal,
  Fade,
  Card,
  IconButton,
  Backdrop
} from '@mui/material'
import { useSpecialties } from 'specialty/queries'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useTemplates } from 'template/queries'
import { TemplateType, TemplateWithSpecialty } from 'template'
import { useVisible } from 'common/hooks'
import { Close } from '@mui/icons-material'

const RenderAvaliableTemplates = ({ template }: { template: TemplateWithSpecialty }): ReactElement => {
	const modal = useVisible()

	return (
		<Grid container spacing={2} mb={6} key={template.id}>
			<Grid item xs={10}>
				<Typography variant="h5" component="h2">
					{template.title}
				</Typography>
				<Typography variant="body1" component="p">
					{template.specialty.name}
				</Typography>
			</Grid>
			<Grid item xs={2}>
				<Stack
					justifyContent="flex-end"
					spacing={2}
					alignItems="flex-end"
					direction="row"
				>
					<Button
						sx={{ borderRadius: 0 }}
						variant="contained"
						size="medium"
						onClick={modal.show}
					>
						Visualizar
					</Button>
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
			<Modal
				open={modal.visible}
				onClose={modal.hide}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={modal.visible}>
					<Card
						sx={{
							position: 'absolute' as const,
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 800,
							boxShadow: 24,
							p: t => t.spacing(2),
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								mb: t => t.spacing(2),
							}}
						>
							<Typography variant="h5" component="h2">
								Modelo: {template.title}
							</Typography>
							<IconButton onClick={modal.hide}>
								<Close />
							</IconButton>
						</Box>
						<Paper
							elevation={1}
							sx={{
								maxHeight: 800,
								p: t => t.spacing(2),
								border: '1px solid #eee',
								overflow: 'auto',
							}}
							dangerouslySetInnerHTML={{ __html: template.html }}
						/>
					</Card>
				</Fade>
			</Modal>
		</Grid>
	)
}

export function AnamnesisList(): ReactElement {
  const [showAvaliableTemplate, setShowAvaliableTemplate] = useState<boolean>(true);
  const [showMyTemplate, setShowMyTemplate] = useState<boolean>(true);

  const handleChangeAvaliableTemplate = () => {
    setShowAvaliableTemplate(oldState => !oldState)
  }
  const handleChangeMyTemplate = () => {
    setShowMyTemplate(oldState => !oldState)
  }

	const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 9999,
	})
  const [specialty, setSpecialty] = useState<string>()

	const navigate = useNavigate()
	const anamnesis = useAnamnesis({
    ...pagination,
    page: pagination.page + 1,
    specialtyId: specialty,
  })

  const templates = useTemplates({
		page: 1,
		size: 9999,
		type: 'ANAMNESIS' as TemplateType,
		specialtyId: specialty,
	})

  const theme = useTheme()

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
								sx={{ mb: theme.spacing(2) }}
							>
								Anamneses
							</Typography>
              <CustomButton
                onClick={handleChangeAvaliableTemplate}
              >
                Modelos de anamneses disponíveis
                {showAvaliableTemplate ? <CustomArrowDown /> : <CustomArrowRight />}
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
          <Collapse in={showAvaliableTemplate} timeout="auto" unmountOnExit>
            {(templates.data?.result && templates.data?.result.length > 0) ? templates.data?.result.map(template => (
              <RenderAvaliableTemplates template={template} key={template.id} />
            )) : (
              <Box component="span" sx={{ display: 'block' }}>
                <Typography
                  variant="h6"
                  component="h4"
                  align='center'
                >
                  Sem dados
                </Typography>
              </Box>
            )}
          </Collapse>
        </Paper>
        <Paper
					elevation={3}
					sx={{ p: t => t.spacing(2), mb: t => t.spacing(2) }}
				>
          <Grid container mb={8}>
            <Grid item xs={10}>
              <CustomButton
                onClick={handleChangeMyTemplate}
              >
                Meus Modelos
                {showMyTemplate ? <CustomArrowDown /> : <CustomArrowRight />}
              </CustomButton>
            </Grid>
          </Grid>
          <Collapse in={showMyTemplate} timeout="auto" unmountOnExit>
            {anamnesis.data?.result && anamnesis.data?.result.length > 0 ? anamnesis.data?.result.map((anamnesi) => (
              <Grid container mb={6} key={anamnesi.id}>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    component="h3"
                  >
                    Avaliação {anamnesi.doctor.specialty.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                  >
                    {anamnesi.doctor.name}
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
            )) : (
              <Box component="span" sx={{ display: 'block' }}>
                <Typography
                  variant="h6"
                  component="h4"
                  align='center'
                >
                  Sem dados
                </Typography>
              </Box>
            )}
          </Collapse>
          <Button
            variant='contained'
            fullWidth
            type="button"
            size='large'
            onClick={() => navigate('/anamnesis/create')}
          >
            Criar uma nova Anamnese
          </Button>
        </Paper>
      </Box>
      <FloatingWhatsAppButton />
		</Container>
	)
}
