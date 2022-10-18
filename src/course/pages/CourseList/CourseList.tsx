import {
	Button,
	Card,
	Grid,
	LinearProgress,
	Typography,
	Pagination as MuiPagination,
} from '@mui/material'
import { Image } from 'mui-image'
import { Box, Stack } from '@mui/system'
import { LoadingOverlay } from 'common/components'
import { Pagination } from 'common/types'
import { useFindManyCourses } from 'course/queries'
import { useState } from 'react'
import { useDidUpdate } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import { Prisma } from '@prisma/client'
import { useAuthStore } from 'auth/providers'

enum View {
	ALL = 'all',
	IN_PROGRESS = 'in-progress',
	COMPLETED = 'completed',
}

export function CourseList() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [view, setView] = useState(View.ALL)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { user } = useAuthStore()
	const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 5,
	})

	const queries: { [key in 'common' | `${View}`]: Prisma.CourseFindManyArgs } =
		{
			[View.ALL]: {},
			[View.IN_PROGRESS]: {},
			[View.COMPLETED]: {},
			common: {
				orderBy: {
					title: 'desc',
				},
			},
		}
	const courses = useFindManyCourses({
		...queries[view],
		...queries.common,
		take: pagination.size,
		skip: pagination.page * pagination.size,
	})

	useDidUpdate(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [pagination])

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
				<Box sx={{ mb: 2 }}>
					<Typography variant="h4" component="h1" color="secondary">
						Cursos disponíveis
					</Typography>
					<Typography
						variant="body1"
						component="h2"
						color={theme => theme.palette.grey[600]}
						mb={2}
					>
						Atualização e capacitação profissional completas
					</Typography>
					{/*
					<Stack spacing={2} direction="row">
						<Button
							color={view === View.ALL ? 'secondary' : 'gray'}
							sx={{
								color: t =>
									view === View.ALL ? 'secondary' : t.palette.grey[600],
							}}
							onClick={() => setView(View.ALL)}
						>
							Todos os cursos {courses.data?.count}
						</Button>
						<Button
							sx={{
								color: t =>
									view === View.IN_PROGRESS ? 'secondary' : t.palette.grey[600],
							}}
							color={view === View.IN_PROGRESS ? 'secondary' : 'gray'}
							onClick={() => setView(View.IN_PROGRESS)}
						>
							Em progresso
						</Button>
						<Button
							sx={{
								color: t =>
									view === View.COMPLETED ? 'secondary' : t.palette.grey[600],
							}}
							color={view === View.COMPLETED ? 'secondary' : 'gray'}
							onClick={() => setView(View.COMPLETED)}
						>
							Completos
						</Button>
					</Stack> */}
				</Box>
				<Stack spacing={2}>
					{courses.data?.result.map((course, i) => (
						<Card key={course.id} sx={{ p: 2 }}>
							<Grid container spacing={2}>
								<Grid item xs={3}>
									<Image
										src={`${
											course.cover ?? 'https://via.placeholder.com/150'
										}?e=${(Date.now() + i).toString()}`}
										alt={course.title}
									/>
								</Grid>
								<Grid
									item
									xs={9}
									sx={{ display: 'flex', flexFlow: 'column nowrap' }}
								>
									<Box>
										<Typography
											variant="h6"
											to={`/courses/${course.id}`}
											component={Link}
											sx={{
												display: 'block',
												color: 'initial',
												textDecoration: 'none',
											}}
										>
											{course.title}
										</Typography>
										<Typography
											variant="body1"
											component="div"
											color={t => t.palette.grey[500]}
										>
											{course.description}
										</Typography>
									</Box>
									<Box display="flex" flexDirection="row" marginTop="auto">
										<Box
											sx={{
												width: 300,
											}}
										>
											<Typography
												variant="body2"
												component="div"
												fontWeight="bold"
												marginBottom={0.5}
											>
												{course.lessons.filter(l => l.finished).length}/
												{course.lessons.length} Aulas
											</Typography>
											<LinearProgress
												color="secondary"
												variant="determinate"
												value={
													(course.lessons.filter(l => l.finished).length *
														100) /
													course.lessons.length
												}
											/>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'flex-end',
												flexGrow: 1,
												alignItems: 'center',
											}}
										>
											<Button
												component={Link}
												to={`/courses/${course.id}`}
												color="secondary"
												variant="contained"
											>
												Ver curso
											</Button>
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Card>
					))}
					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						<MuiPagination
							count={Math.ceil((courses.data?.count ?? 0) / pagination.size)}
							page={pagination.page + 1}
							onChange={(_, page) =>
								setPagination({ ...pagination, page: page - 1 })
							}
						/>
					</Box>
				</Stack>
			</Box>

			<LoadingOverlay show={courses.isLoading} />
		</>
	)
}
