/* eslint-disable react/no-array-index-key */
import { Box, Typography, Grid, Button, Paper, Stack } from '@mui/material'
import { PatientChartInfoProps } from 'patient'
import { Anamnesis } from 'anamnesis'
import { Evaluation } from 'evaluation'
import { len, download, isListable } from '@excelsia/general-helpers'
import { client } from 'common/client'
import { Evolution } from 'evolution'

const patientAnamneseInfo = (
	anamnesis: Anamnesis,
	handleDownload: () => void,
) => (
	<Box mb={2} key={anamnesis.numericId} mt={2}>
		<Paper variant="outlined" sx={{ padding: '8px' }}>
			<Grid container>
				<Grid item xs={6}>
					<Typography variant="h6" component="h3">
						{anamnesis.title && anamnesis.title.length > 0 ? (
							anamnesis.title
						) : (
							<>
								{`${'Anamnese'}`} {anamnesis.numericId}
							</>
						)}
					</Typography>
				</Grid>
				<Grid item xs={6} sx={{ display: 'flex' }} justifyContent="flex-end">
					<Button
						color="secondary"
						variant="outlined"
						size="small"
						onClick={handleDownload}
					>
						Exportar
					</Button>
				</Grid>
			</Grid>
			<Typography variant="body1" component="p">
				{anamnesis.text ? (
					// eslint-disable-next-line react/no-danger
					<div dangerouslySetInnerHTML={{ __html: anamnesis.text }} />
				) : (
					'Não informado'
				)}
			</Typography>
		</Paper>
	</Box>
)

const patientEvaluationInfo = (
	evaluation: Evaluation,
	handleDownload: () => void,
) => (
	<Box mb={2} key={evaluation.numericId} mt={2}>
		<Paper variant="outlined" sx={{ padding: '8px' }}>
			<Stack spacing={2}>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant="h6" component="h3">
							{evaluation.title && evaluation.title.length > 0 ? (
								evaluation.title
							) : (
								<>
									{`${'Avaliação'}`} {evaluation.numericId}
								</>
							)}
						</Typography>
					</Grid>
					<Grid item xs={6} sx={{ display: 'flex' }} justifyContent="flex-end">
						<Button
							color="secondary"
							variant="outlined"
							size="small"
							onClick={handleDownload}
						>
							Exportar
						</Button>
					</Grid>
				</Grid>
				<Typography variant="body1" component="p">
					{evaluation.text ? (
						// eslint-disable-next-line react/no-danger
						<div dangerouslySetInnerHTML={{ __html: evaluation.text }} />
					) : (
						'Não informado'
					)}
				</Typography>
				{len(evaluation.comments) > 0 && (
					<Typography variant="body1" component="p">
						<strong>Comentário:</strong> {evaluation.comments}
					</Typography>
				)}
			</Stack>
		</Paper>
	</Box>
)

const patientEvolutionInfo = (
	evolution: Evolution,
	handleDownload: () => void,
) => (
	<Box mb={2} key={evolution.numericId} mt={2}>
		<Paper variant="outlined" sx={{ padding: '8px' }}>
			<Stack spacing={2}>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant="h6" component="h3">
							{evolution.title && evolution.title.length > 0 ? (
								evolution.title
							) : (
								<>
									{`${'Avaliação'}`} {evolution.numericId}
								</>
							)}
						</Typography>
					</Grid>
					<Grid item xs={6} sx={{ display: 'flex' }} justifyContent="flex-end">
						<Button
							color="secondary"
							variant="outlined"
							size="small"
							onClick={handleDownload}
						>
							Exportar
						</Button>
					</Grid>
				</Grid>
				<Typography variant="body1" component="p">
					{evolution.text ? (
						// eslint-disable-next-line react/no-danger
						<div dangerouslySetInnerHTML={{ __html: evolution.text }} />
					) : (
						'Não informado'
					)}
				</Typography>
				{len(evolution.comments) > 0 && (
					<Typography variant="body1" component="p">
						<strong>Comentário:</strong> {evolution.comments}
					</Typography>
				)}
				{isListable(evolution.exercises) && (
					<>
						<Typography variant="subtitle1" component="p">
							Exercícios:
						</Typography>
						<Box
							sx={{
								borderLeft: t => `1px solid ${t.palette.primary.main}`,
								pl: t => t.spacing(2),
							}}
						>
							{evolution.exercises.map((e, i) => (
								<Box key={i}>
									<Typography variant="h6" component="h3">
										{e.title}
									</Typography>
									<Typography variant="body1" component="p">
										{e.description}
									</Typography>
								</Box>
							))}
						</Box>
					</>
				)}
			</Stack>
		</Paper>
	</Box>
)

export function PatientChartInfo({ type, data }: PatientChartInfoProps) {
	// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
	const handle = download.blob(`${data.id}.pdf`)

	const downloadAnamnesis = () => {
		client(`patients/${data.patientId}/anamnesis/${data.id}`)
			.blob()
			.then(handle)
			.catch(error => {
				console.error(error)
			})
	}

	const downloadEvaluation = () => {
		client(`patients/${data.patientId}/evaluations/${data.id}`)
			.blob()
			.then(handle)
			.catch(error => {
				console.error(error)
			})
	}

	if (type === 'anamnesis') {
		return patientAnamneseInfo(data, downloadAnamnesis)
	}

	if (type === 'evaluation') {
		return patientEvaluationInfo(data, downloadEvaluation)
	}

	return patientEvolutionInfo(data, downloadEvaluation)
}
