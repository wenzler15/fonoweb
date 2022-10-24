import { useDidUpdate } from '@mantine/hooks'
import { ExpandMore, PlayCircle } from '@mui/icons-material'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Card,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material'
import { Box, Stack, styled, useTheme } from '@mui/system'
import { LoadingOverlay } from 'common/components'
import { getYoutubeIdFromUrl } from 'common/utils/getYoutubeIdFromUrl'
import { useSetVideoAsWatched } from 'course/mutations'
import { useDeleteCourse } from 'course/mutations/useDeleteCourse'
import { useSetVideoAsNotWatched } from 'course/mutations/useSetVideoAsNotWatched'
import { useFindFirstCourse } from 'course/queries'
import { useIsVideoWatched } from 'course/queries/useIsVideoWatched'
import { Lesson, LessonVideo } from 'course/types'
import { useMemo, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const C = styled(AccordionSummary)`
	&.Mui-expanded {
		min-height: 0px;
		height: 48px;
	}
`

export function CourseDetail() {
	const theme = useTheme()
	const [videoId, setVideoId] = useState<string>()
	const [lesson, setLesson] = useState<Lesson>()
	const [video, setVideo] = useState<LessonVideo>()
	const { courseId } = useParams<{ courseId: string }>()
	const course = useFindFirstCourse({ where: { id: courseId } })
	const isVideoWatched = useIsVideoWatched({
		videoId: video?.id,
	})
	const options = useMemo(
		() => ({
			async onSuccess() {
				course.refetch()
				isVideoWatched.refetch()
			},
			async onError() {
				await Swal.fire({
					icon: 'warning',
					title: 'Não foi possivel atualizar o video',
				})
			},
		}),
		[course, isVideoWatched],
	)

	const setVideoAsNotWatched = useSetVideoAsNotWatched(options)
	const setVideoAsWatched = useSetVideoAsWatched(options)
	const navigate = useNavigate()
	const remove = useDeleteCourse({
		onSuccess: () => {
			Swal.fire({
				title: 'Sucesso',
				text: 'Curso removido com sucesso',
				icon: 'success',
			})
			navigate('/courses')
		},
		onError: () => {
			Swal.fire({
				title: 'Error',
				text: 'Não foi possível remover o curso',
				icon: 'error',
			})
		},
	})

	const handleCourseRemove = () => {
		Swal.fire({
			title: 'Tem certeza?',
			text: 'Você não poderá reverter isso!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: theme.palette.primary.main,
			cancelButtonColor: theme.palette.error.main,
			confirmButtonText: 'Sim, deletar!',
		}).then(result => {
			if (result.isConfirmed) {
				remove.mutate({
					id: courseId!,
				})
			}
		})
	}

	const watchedCurrentHandlerText = () => {
		if (isVideoWatched.isLoading) {
			return 'Carregando...'
		}

		return isVideoWatched.data
			? 'Marcar como não assistido'
			: 'Marcar como assistido'
	}

	useDidUpdate(() => {
		if (video) {
			setVideoId(getYoutubeIdFromUrl(video.video))
			const currentLesson = course.data?.lessons.find(
				l => l.id === video.lessonId,
			)
			setLesson(currentLesson)
		}
	}, [video])

	return (
		<>
			<Box
				sx={{
					p: 4,
					px: {
						xs: 4,
						lg: 15,
					},
					pb: 9,
				}}
			>
				<Box mb={2} display="flex" alignItems="center">
					<Box flexGrow={1}>
						<Typography variant="h4" component="h1">
							{course.data?.title}
						</Typography>
						<Typography variant="body1" component="h2" color="textSecondary">
							{course.data?.description}
						</Typography>
					</Box>
					<Stack direction="row" spacing={2}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							component={Link}
							to={`/courses/${course.data?.id ?? ''}/edit`}
						>
							Editar curso
						</Button>
						<Button
							variant="contained"
							color="error"
							size="large"
							onClick={handleCourseRemove}
						>
							Remover curso
						</Button>
					</Stack>
				</Box>
				<Grid container spacing={4}>
					<Grid item xs={7}>
						<Card sx={{ p: 2 }}>
							{video ? (
								<Box>
									{/* eslint-disable-next-line react/iframe-missing-sandbox */}
									<iframe
										src={`https://www.youtube.com/embed/${videoId!}`}
										title={video.title}
										style={{
											aspectRatio: '16/9',
											width: '100%',
											marginBottom: theme.spacing(2),
										}}
										frameBorder="0"
									/>
									<Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
										<Box
											sx={{
												flexGrow: 1,
												display: 'flex',
												flexDirection: 'column',
											}}
										>
											<Typography variant="h5" component="h3">
												{video.title}
											</Typography>
											<Typography
												variant="body2"
												component="div"
												sx={{ marginTop: 2 }}
											>
												<Typography
													variant="body2"
													component="span"
													color="textSecondary"
												>
													Criado por:
												</Typography>{' '}
												{lesson?.creator.name}
											</Typography>
										</Box>
										<Box sx={{ display: 'flex' }}>
											<Stack spacing={1} direction="row">
												<Button
													color="inherit"
													size="large"
													onClick={() => {
														if (!isVideoWatched.data) {
															return setVideoAsWatched.mutate({
																videoId: video.id,
															})
														}
														return setVideoAsNotWatched.mutate({
															videoId: video.id,
														})
													}}
												>
													{watchedCurrentHandlerText()}
												</Button>
											</Stack>
										</Box>
									</Box>
								</Box>
							) : (
								<Box>
									<Typography variant="h5" component="h3">
										Selecione uma aula para assistir
									</Typography>
								</Box>
							)}
						</Card>
					</Grid>
					<Grid item xs={5}>
						<Card sx={{ p: 2 }}>
							<Box mb={1}>
								<Typography variant="h5" component="h1" fontWeight="500">
									Aulas do curso
								</Typography>
							</Box>
							<Box>
								{course.data?.lessons.map(l => (
									<Accordion key={l.id}>
										<C expandIcon={<ExpandMore />}>
											<Typography>{l.title}</Typography>
										</C>
										<AccordionDetails sx={{ p: 0 }}>
											<List dense disablePadding>
												{l.videos.map(v => (
													<ListItem
														onClick={() => setVideo(v)}
														key={v.id}
														disableGutters
														dense
														button
														sx={{ height: 40, px: 2 }}
													>
														<ListItemAvatar
															sx={{
																minWidth: 0,
																display: 'flex',
																alignItems: 'center',
																marginRight: 1,
															}}
														>
															<PlayCircle
																sx={{
																	color: t => t.palette.grey[500],
																}}
															/>
														</ListItemAvatar>
														<ListItemText primary={v.title} />
													</ListItem>
												))}
											</List>
										</AccordionDetails>
									</Accordion>
								))}
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Box>
			<LoadingOverlay
				show={
					course.isLoading ||
					setVideoAsWatched.isLoading ||
					setVideoAsNotWatched.isLoading ||
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					(isVideoWatched.isLoading && isVideoWatched.data !== undefined)
				}
			/>
		</>
	)
}
