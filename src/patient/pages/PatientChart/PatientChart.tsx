import { NavBar } from 'components/navBar'
import { ReactElement, useState } from 'react'
import {
	useTheme,
	Box,
	Typography,
	Grid,
	Button,
	Paper,
	Avatar,
	Collapse,
	Stack,
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
import {
	PatientEvaluationModal,
	PatientEvolutionModal,
	PatientFormModal,
} from 'patient/components'
import { useAnamnesis } from 'anamnesis/queries'
import { client } from 'common/client'
import { download, isListable } from '@excelsia/general-helpers'
import { useEvolutions } from 'evolution/queries'

export function PatientChart(): ReactElement {
	const theme = useTheme()
	const { patient: patientId } = useParams()
	const evolutionModal = useVisible()
	const evaluationModal = useVisible()
	const patientCreateModal = useVisible()
	const evolutionAccordion = useVisible()
	const [showAnamnesis, setShowAnamnesis] = useState(false)
	const [showEvaluation, setShowEvaluation] = useState(false)

	const patient = usePatientById(patientId as string)
	const anamneses = useAnamnesis({
		size: 999,
		page: 1,
		patientId,
	})
	const evaluations = useEvaluations({
		size: 999,
		page: 1,
		patientId,
	})

	const evolutions = useEvolutions({
		where: {
			patientId,
		},
		orderBy: {
			createdAt: 'desc',
		},
	})

	const handleShowAnamnesis = () => {
		setShowAnamnesis(oldState => !oldState)
	}

	const handleShowEvaluation = () => {
		setShowEvaluation(oldState => !oldState)
	}

	const handleEvaluationsDownload = () => {
		if (patientId) {
			const handle = download.blob(`${patientId}.pdf`)

			client(`patients/${patientId}/evolutions`)
				.blob()
				.then(handle)
				.catch(error => {
					console.error(error)
				})
		}
	}

	const handlePatientDownload = () => {
		if (patientId) {
			const handle = download.blob(`${patientId}.pdf`)

			client(`patients/${patientId}/export`)
				.blob()
				.then(handle)
				.catch(error => {
					console.error(error)
				})
		}
	}

	const handleAnamnesisDownload = () => {
		if (patientId) {
			const handle = download.blob(`${patientId}.pdf`)

			client(`patients/${patientId}/anamnesis`)
				.blob()
				.then(handle)
				.catch(error => {
					console.error(error)
				})
		}
	}

	if (patient.isError) {
		return <NotFound />
	}

	return (
		<>
			<Box sx={{ p: theme.spacing(4), pb: theme.spacing(2) }}>
				<Paper elevation={2} sx={{ p: theme.spacing(4) }}>
					<Grid container>
						<Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
							<Avatar
								alt={patient.data?.name ?? 'avatar'}
								src={patient.data?.avatar ?? ''}
								sx={{ width: 56, height: 56, mr: theme.spacing(3) }}
							/>
							<Typography variant="h5" component="h1">
								{patient.data?.name}
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Stack
								direction="row"
								sx={{ display: 'flex', justifyContent: 'flex-end' }}
							>
								<Button
									sx={{
										pl: theme.spacing(6),
										pr: theme.spacing(6),
										mr: theme.spacing(2),
									}}
									variant="contained"
									size="large"
									color="secondary"
									onClick={handlePatientDownload}
								>
									Exportar Completo
								</Button>
								<Button
									sx={{
										pl: theme.spacing(6),
										pr: theme.spacing(6),
									}}
									variant="contained"
									size="large"
									color="primary"
									onClick={patientCreateModal.show}
								>
									Editar
								</Button>
							</Stack>
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
								Telefone: Não informado
							</Typography>
						</Grid>
					</Grid>
					<Grid container sx={{ mb: theme.spacing(5) }}>
						<Grid item xs={6}>
							<CustomButton onClick={handleShowAnamnesis}>
								Anamneses do paciente
								{showAnamnesis ? <CustomArrowDown /> : <CustomArrowRight />}
							</CustomButton>
						</Grid>
						<Grid item xs={6} textAlign="right">
							<Button
								color="primary"
								variant="contained"
								size="medium"
								onClick={handleAnamnesisDownload}
							>
								Exportar Anamneses
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
					<Grid container sx={{ mb: theme.spacing(5) }}>
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
									onClick={handleEvaluationsDownload}
								>
									Exportar Avaliações
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
					<Grid container sx={{ mb: theme.spacing(10) }}>
						<Grid container>
							<Grid item xs={6}>
								<CustomButton onClick={evolutionAccordion.toggle}>
									Consultas
									{evolutionAccordion.visible ? (
										<CustomArrowDown />
									) : (
										<CustomArrowRight />
									)}
								</CustomButton>
							</Grid>
							<Grid item xs={6} textAlign="right">
								<Button
									color="primary"
									variant="contained"
									size="medium"
									onClick={evolutionModal.show}
								>
									Nova Consulta
								</Button>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Collapse
								in={evolutionAccordion.visible}
								timeout="auto"
								unmountOnExit
							>
								{isListable(evolutions.data?.result) ? (
									evolutions.data?.result.map(evolution => (
										<PatientChartInfo
											key={evolution.id}
											data={evolution}
											type="evolution"
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
										Nenhuma consulta cadastrada
									</Typography>
								)}
							</Collapse>
						</Grid>
					</Grid>
				</Paper>
			</Box>
			<PatientEvolutionModal
				visible={evolutionModal.visible}
				onClose={() => {
					evolutionModal.hide()
					evolutions.refetch()
				}}
			/>
			<PatientEvaluationModal
				visible={evaluationModal.visible}
				onClose={() => {
					evaluationModal.hide()
					evaluations.refetch()
				}}
			/>
			<PatientFormModal
				visible={patientCreateModal.visible}
				onClose={() => {
					patientCreateModal.hide()
					evaluations.refetch()
				}}
			/>
		</>
	)
}
