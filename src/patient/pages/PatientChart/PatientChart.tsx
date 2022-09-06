import { NavBar } from 'components/navBar'
import { ReactElement } from 'react'
import { FloatingWhatsAppButton } from 'common/components'
import {
	useTheme,
	Box,
	Typography,
	Grid,
	Button,
	Paper,
	Avatar,
} from '@mui/material'
import { Title } from './PatientChart.styles'
import { PatientChartInfo } from './PatientChartInfo'
import { useParams } from 'react-router-dom'
import { useEvaluations } from 'evaluation/queries'
import { usePatientById } from 'patient/queries'
import { NotFound } from './NotFound'
import { calculateAge } from 'helpers/calculateAge'
import { useVisible } from 'common/hooks'
import { PatientAppointmentModal } from 'patient/components'

export function PatientChart(): ReactElement {
	const theme = useTheme()
	const { id } = useParams()
	const modal = useVisible()

	const patient = usePatientById(id as string)

	const evaluations = useEvaluations({
		size: 999,
		page: 1,
		patientId: id,
	})

	if (patient.isError) {
		return (
			<>
				<NavBar />
				<NotFound />
			</>
		)
	}

	return (
		<>
			<NavBar />
			<Box sx={{ p: theme.spacing(4), pb: theme.spacing(2) }}>
				<Paper elevation={2} sx={{ p: theme.spacing(4) }}>
					<Grid container>
						<Grid item xs={9} sx={{ display: 'flex', alignItems: 'center' }}>
							<Avatar
								alt={patient.data?.name ?? 'avatar'}
								src={patient.data?.avatar ?? ''}
								sx={{ width: 56, height: 56, mr: theme.spacing(3) }}
							/>
							<Typography variant="h5" component="h1">
								{patient.data?.name}
							</Typography>
						</Grid>
						<Grid item xs={3} sx={{ textAlign: 'right' }}>
							<Button
								sx={{
									borderRadius: 0,
									pl: theme.spacing(6),
									pr: theme.spacing(6),
								}}
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
								{patient.data?.name} -
								{patient.data?.birthDate
									? `${calculateAge(patient.data.birthDate)} anos`
									: ''}
							</Typography>
							<Typography
								variant="h6"
								component="h3"
								sx={{ mb: theme.spacing(2) }}
							>
								{/* TODO: GET FRO API */}
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
							<Typography variant="h6" component="h3">
								Resumo do paciente
							</Typography>
							<Typography
								variant="body1"
								component="p"
								sx={{ mb: theme.spacing(2), color: '#AAAAAA' }}
							>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the standard dummy text ever
								since the 1500s
							</Typography>
						</Grid>
					</Grid>
					<Grid container sx={{ mb: theme.spacing(5) }}>
						<Grid item xs={6}>
							<Title>Anamnese do paciente</Title>
						</Grid>
						<Grid item xs={6} textAlign="right">
							<Button
								color="primary"
								variant="contained"
								size="medium"
								sx={{ borderRadius: 0 }}
							>
								Baixar Anamnese
							</Button>
						</Grid>
					</Grid>
					<Grid container sx={{ mb: theme.spacing(10) }}>
						<Grid container>
							<Grid item xs={6}>
								<Title>Consultas</Title>
							</Grid>
							<Grid item xs={6} textAlign="right">
								<Button
									color="primary"
									variant="contained"
									size="medium"
									sx={{ borderRadius: 0 }}
									onClick={modal.show}
								>
									Nova Consulta
								</Button>
							</Grid>
						</Grid>
						{evaluations.data?.result.length ? (
							evaluations.data.result.map(evaluation => (
								<Grid item xs={12} key={evaluation.id}>
									<PatientChartInfo data={evaluation} type="evaluation" />
								</Grid>
							))
						) : (
							<Typography
								variant="body1"
								component="p"
								sx={{
									mb: theme.spacing(2),
									ml: theme.spacing(1),
									color: '#AAAAAA',
									display: 'inline',
								}}
							>
								Nenhuma consulta cadastrada
							</Typography>
						)}
					</Grid>
				</Paper>
			</Box>
			<PatientAppointmentModal
				visible={modal.visible}
				onClose={() => {
					modal.hide()
					evaluations.refetch()
				}}
			/>
			<FloatingWhatsAppButton />
		</>
	)
}
