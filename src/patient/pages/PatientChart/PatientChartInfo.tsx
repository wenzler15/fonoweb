/* eslint-disable react/no-array-index-key */
import { Box, Typography, Grid, Button, Paper, Stack } from '@mui/material'
import { PatientChartInfoProps } from 'patient'
import { Anamnesis } from 'anamnesis'
import { Evaluation } from 'evaluation'
import { len, download, isListable } from '@excelsia/general-helpers'
import { client } from 'common/client'
import { Evolution } from 'evolution'
import { isYoutube } from 'common/utils/isYoutube'
import { getYoutubeIdFromUrl } from 'common/utils/getYoutubeIdFromUrl'
import { map, piped } from 'rambdax'
import { getVimeoIdFromUrl } from 'common/utils/getVimeoIdFromUrl'
import { isVimeo } from 'common/utils/isVimeo'
import { EmbedVideo } from 'common/components'

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
					<Typography variant="caption" component="h4" fontSize="1rem">
						{anamnesis.specialty.name}
					</Typography>
				</Grid>
				<Grid
					item
					xs={6}
					display="flex"
					justifyContent="flex-end"
					alignItems="flex-start"
				>
					<Button
						color="secondary"
						variant="outlined"
						size="small"
						onClick={handleDownload}
					>
						Baixar
					</Button>
				</Grid>
			</Grid>
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
							Baixar
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
							Baixar
						</Button>
					</Grid>
				</Grid>
				<Typography variant="body1" component="p">
					{evolution.text ? (
						// eslint-disable-next-line react/no-danger
						<Box
							sx={{
								'& p': {
									marginTop: '0 !important',
									marginBottom: 1,
								},
							}}
							dangerouslySetInnerHTML={{ __html: evolution.text }}
						/>
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
					<Stack spacing={1}>
						<Typography variant="subtitle1" component="p">
							Exercícios:
						</Typography>
						{evolution.exercises.map((e, i) => (
							<Box key={i}>
								<Typography variant="h6" component="h3">
									{e.title}
								</Typography>
								<Typography variant="body1" component="p">
									{e.description}
								</Typography>
								<Grid container spacing={2}>
									{piped(
										e.links,
										map(l => (
											<Grid item key={l} xs={6}>
												<EmbedVideo url={l} title={e.title} />
											</Grid>
										)),
									)}
								</Grid>
							</Box>
						))}
					</Stack>
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

	const downloadEvolution = () => {
		client(`patients/${data.patientId}/evolutions/${data.id}`)
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

	return patientEvolutionInfo(data, downloadEvolution)
}
