import { Box, Typography, Grid, Button, Paper, Stack } from '@mui/material'
import { PatientChartInfoProps } from 'patient'
import { Anamnesis } from 'anamnesis'
import { Evaluation } from 'evaluation'
import { len, download } from '@excelsia/general-helpers'
import { client } from 'common/client'

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
	download: () => void,
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
							onClick={download}
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

	return patientEvaluationInfo(data, downloadEvaluation)
}
