import { Box, Typography, Grid, Button, Paper, Stack } from '@mui/material'
import { PatientChartInfoProps } from 'patient'
import { Anamnesis } from 'anamnesis'
import { Evaluation } from 'evaluation'
import { len } from '@excelsia/general-helpers'

const patientAnamneseInfo = (anamnese: Anamnesis) => (
	<Box mb={2} key={anamnese.numericId} mt={2}>
		<Paper variant="outlined" sx={{ padding: '8px' }}>
			<Grid container>
				<Grid item xs={6}>
					<Typography variant="h6" component="h3">
						{anamnese.title && anamnese.title.length > 0 ? (
							anamnese.title
						) : (
							<>
								{`${'Anamnese'}`} {anamnese.numericId}
							</>
						)}
					</Typography>
				</Grid>
				<Grid item xs={6} sx={{ display: 'flex' }} justifyContent="flex-end">
					<Button color="secondary" variant="outlined" size="small">
						Exportar
					</Button>
				</Grid>
			</Grid>
			<Typography variant="body1" component="p">
				{anamnese.text ? (
					// eslint-disable-next-line react/no-danger
					<div dangerouslySetInnerHTML={{ __html: anamnese.text }} />
				) : (
					'Não informado'
				)}
			</Typography>
		</Paper>
	</Box>
)

const patientEvaluationInfo = (evaluation: Evaluation) => (
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
						<Button color="secondary" variant="outlined" size="small">
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
	if (type === 'anamnesis') {
		return patientAnamneseInfo(data)
	}

	return patientEvaluationInfo(data)
}
