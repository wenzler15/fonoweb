import { ReactElement, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
	Container,
	CustomArrowDown,
	CustomArrowRight,
	CustomButton,
} from './EvolutionList.styles'
import {
	Backdrop,
	Box,
	Button,
	Card,
	Collapse,
	Fade,
	FormControl,
	Grid,
	IconButton,
	InputLabel,
	MenuItem,
	Modal,
	Paper,
	Select,
	Stack,
	Typography,
	useTheme,
} from '@mui/material'
import { useSpecialties } from 'specialty/queries'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import { useEvolutions } from 'evolution/queries'

export function EvolutionList(): ReactElement {
	const [showAvaliableTemplate, setShowAvaliableTemplate] =
		useState<boolean>(true)
	const [showMyTemplate, setShowMyTemplate] = useState<boolean>(true)

	const handleChangeAvaliableTemplate = () => {
		setShowAvaliableTemplate(oldState => !oldState)
	}
	const handleChangeMyTemplate = () => {
		setShowMyTemplate(oldState => !oldState)
	}

	const theme = useTheme()
	const navigate = useNavigate()
	const [specialty, setSpecialty] = useState<string>()

	const evolutions = useEvolutions({
		where: {
			specialtyId: specialty,
		},
		orderBy: {
			createdAt: 'desc',
		},
	})

	const specialties = useSpecialties({
		page: 1,
		size: 9999,
	})

	return (
		<Container>
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
					<Grid container mb={2}>
						<Grid item xs={10}>
							<CustomButton onClick={handleChangeMyTemplate}>
								Minhas Consultas
								{showMyTemplate ? <CustomArrowDown /> : <CustomArrowRight />}
							</CustomButton>
						</Grid>
					</Grid>
					<Collapse in={showMyTemplate} timeout="auto" unmountOnExit>
						{evolutions.data?.result && evolutions.data.result.length > 0 ? (
							evolutions.data.result.map(evolution => (
								<Grid container mb={6} key={evolution.id}>
									<Grid item xs={12}>
										<Typography variant="h6" component="h3">
											{evolution.title}
										</Typography>
										<Typography variant="body1" component="p">
											Paciente: {evolution.patient.user.name}
										</Typography>
										<Typography variant="body1" component="p">
											Especialidade: {evolution.specialty.name}
										</Typography>
									</Grid>
									<Grid item xs={2}>
										<Stack
											spacing={2}
											direction="row"
											sx={{ textAlign: 'left' }}
										>
											<Button
												size="small"
												startIcon={<ArrowCircleDownIcon />}
												variant="outlined"
												sx={{ borderRadius: 0 }}
											>
												Baixar
											</Button>
											<Button
												size="small"
												sx={{ borderRadius: 0 }}
												variant="outlined"
											>
												Excluir
											</Button>
										</Stack>
									</Grid>
								</Grid>
							))
						) : (
							<Box component="span" sx={{ display: 'block' }}>
								<Typography variant="h6" component="h4" align="center">
									Sem dados
								</Typography>
							</Box>
						)}
					</Collapse>
					<Button
						variant="contained"
						fullWidth
						type="button"
						size="large"
						onClick={() => navigate('/evolutions/create')}
					>
						Criar consulta personalizada
					</Button>
				</Paper>
			</Box>
		</Container>
	)
}
