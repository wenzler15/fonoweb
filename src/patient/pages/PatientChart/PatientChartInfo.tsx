import {
	useTheme,
	Box,
	Typography,
	Grid,
	Button,
	Stack,
	Chip,
} from '@mui/material'
import { format, formatWithOptions, parseISO } from 'date-fns/fp'
import { PatientChartInfoProps } from 'patient'
import ptBr from 'date-fns/locale/pt-BR'
import React from 'react'

const describeDate = (date: string) =>
	formatWithOptions(
		{
			locale: ptBr,
		},
		"dd 'de' MMMM",
		parseISO(date),
	)

export function PatientChartInfo({ type, data }: PatientChartInfoProps) {
	const theme = useTheme()

	return (
		<Box key={data.id} sx={{ mb: theme.spacing(6) }}>
			<Grid container sx={{ mb: theme.spacing(2) }}>
				<Grid item xs={6}>
					<Stack direction="row" spacing={1} alignItems="center">
						<Typography variant="h6" component="h3">
							{data.title && data.title.length > 0 ? (
								data.title
							) : (
								<>
									{`${type === 'anamnesis' ? 'Anamnese' : 'Consulta'}`}{' '}
									{data.numericId}
								</>
							)}
						</Typography>
						<Chip
							label={describeDate(
								type === 'evaluation' ? data.appointmentDate : data.createdAt,
							)}
							color="primary"
							size="small"
						/>
					</Stack>
					<Typography variant="h6" component="p" sx={{ display: 'inline' }}>
						Evolução:
					</Typography>
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
						{data.text ? (
							// eslint-disable-next-line react/no-danger
							<div dangerouslySetInnerHTML={{ __html: data.text }} />
						) : (
							'Não informado'
						)}
					</Typography>
				</Grid>
			</Grid>
			{type === 'evaluation' && (
				<Grid container>
					{data.exercises.length > 0 &&
						data.exercises.map(exercise => (
							<React.Fragment key={exercise.cuid}>
								<Grid
									item
									xs={6}
									sx={{
										pt: theme.spacing(2),
										borderLeft: 2,
										borderColor: theme.palette.primary.main,
										pl: theme.spacing(4),
										mb: theme.spacing(4),
									}}
								>
									<Typography variant="h6" component="h3">
										{exercise.title}
									</Typography>
									<Typography
										variant="body1"
										component="p"
										sx={{
											color: '#AAAAAA',
											mb: theme.spacing(2),
										}}
									>
										{exercise.description}
									</Typography>
									<Typography variant="body2" component="p">
										Links:
										<ul>
											{exercise.links.map(link => (
												<li key={link}>
													<a href={link} target="_blank" rel="noreferrer">
														{link}
													</a>
												</li>
											))}
										</ul>
									</Typography>
								</Grid>
							</React.Fragment>
						))}
				</Grid>
			)}
			{type === 'anamnesis' && (
				<Grid container>
					{data.questions.length > 0 &&
						data.questions.map(question => (
							<React.Fragment key={question.cuid}>
								<Grid
									item
									xs={6}
									sx={{
										pt: theme.spacing(2),
										borderLeft: 2,
										borderColor: theme.palette.primary.main,
										pl: theme.spacing(4),
										mb: theme.spacing(6),
									}}
								>
									<Stack direction="row" spacing={1} alignItems="center">
										<Typography variant="h6" component="h3">
											{question.question}
										</Typography>
									</Stack>
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
										{question.answers}
									</Typography>
								</Grid>
								<Grid
									item
									xs={6}
									sx={{ display: 'flex' }}
									justifyContent="flex-end"
									alignItems="center"
								>
									<Button
										color="primary"
										variant="contained"
										size="medium"
										sx={{ borderRadius: 0 }}
									>
										Baixar Arquivo
									</Button>
								</Grid>
							</React.Fragment>
						))}
				</Grid>
			)}
		</Box>
	)
}
