import { NavBar } from 'components/navBar'
import { ReactElement, useState } from 'react'
import { FloatingWhatsAppButton } from 'common/components'
import {
	useTheme,
	Box,
	Typography,
	Grid,
	Button,
	Paper,
	Avatar,
	Collapse,
} from '@mui/material'
import {
	CustomArrowDown,
	CustomArrowRight,
	CustomButton,
} from './PatientChart.styles'
import { PatientChartInfo } from './PatientChartInfo'
import { useParams } from 'react-router-dom'
import { useEvaluations } from 'evaluation/queries'
import { usePatientById } from 'patient/queries'
import { NotFound } from './NotFound'
import { calculateAge } from 'helpers/calculateAge'
import { useVisible } from 'common/hooks'
import { PatientAppointmentModal } from 'patient/components'
import { useAnamnesis } from 'anamnesis/queries'

export function PatientChart(): ReactElement {
	const theme = useTheme()
	const { id } = useParams()
	const modal = useVisible()
	const [showAnamnesis, setShowAnamnesis] = useState(false)
	const [showEvaluation, setShowEvaluation] = useState(false)

	const patient = usePatientById(id as string)
	const anamneses = useAnamnesis({
		size: 999,
		page: 1,
		patientId: id,
	})
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

	const handleShowAnamnesis = () => {
		setShowAnamnesis(oldState => !oldState)
	}

	const handleShowEvaluation = () => {
		setShowEvaluation(oldState => !oldState)
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
								{patient.data?.name}
								{patient.data?.birthDate
									? ` - ${calculateAge(patient.data.birthDate)} anos`
									: ''}
							</Typography>
							<Typography
								variant="h6"
								component="h3"
								sx={{ mb: theme.spacing(2) }}
							>
								Telefone: (55) 3333-4444
							</Typography>
						</Grid>
					</Grid>
					<Grid container sx={{ mb: theme.spacing(5) }}>
						<Grid item xs={6}>
							<CustomButton onClick={handleShowAnamnesis}>
								Anamnese do paciente
								{showAnamnesis ? <CustomArrowDown /> : <CustomArrowRight />}
							</CustomButton>
						</Grid>
						<Grid item xs={6} textAlign="right">
							<Button color="primary" variant="contained" size="medium">
								Baixar Anamnese
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Collapse in={showAnamnesis} timeout="auto" unmountOnExit>
								{anamneses.data?.result && anamneses.data.result.length > 0 ? (
									anamneses.data.result.map(anamnese => (
										<PatientChartInfo
											key={anamnese.id}
											data={anamnese}
											type="anamnesis"
										/>
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
										Não encontrado
									</Typography>
								)}
							</Collapse>
						</Grid>
					</Grid>
					<Grid container sx={{ mb: theme.spacing(10) }}>
						<Grid container>
							<Grid item xs={6}>
								<CustomButton onClick={handleShowEvaluation}>
									Avaliações
									{showEvaluation ? <CustomArrowDown /> : <CustomArrowRight />}
								</CustomButton>
							</Grid>
							<Grid item xs={6} textAlign="right">
								<Button
									color="primary"
									variant="contained"
									size="medium"
									onClick={modal.show}
								>
									Nova Avaliação
								</Button>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Collapse in={showEvaluation} timeout="auto" unmountOnExit>
								{evaluations.data?.result.length ? (
									evaluations.data.result.map(evaluation => (
										<PatientChartInfo
											key={evaluation.id}
											data={evaluation}
											type="evaluation"
										/>
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
										Nenhuma avaliação cadastrada
									</Typography>
								)}
							</Collapse>
						</Grid>
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
