import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAuthStore } from 'auth/providers'
import { Back, LoadingOverlay } from 'common/components'
import { CourseForm } from 'course/components/CouseForm/CourseForm'
import { useUpdateCourse } from 'course/mutations/useUpdateCourse'
import { useRemoveCourseLessons } from 'course/mutations/useRemoveCourseLessons'
import { useFindFirstCourse } from 'course/queries'
import { CreateCourseSchema } from 'course/schemas/CreateCourseSchema'
import cuid from 'cuid'
import { Formik } from 'formik'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUniversalParam } from 'routes/hooks'
import Swal from 'sweetalert2'
import { UserWithDoctor } from 'user/types'
import { InferType } from 'yup'

const getInitialData = () => ({
	title: '',
	specialtyId: '',
	cover: '' as unknown as File,
	description: '',
	lessons: [
		{
			cuid: cuid(),
			title: '',
			videos: [
				{
					cuid: cuid(),
					title: '',
					link: '',
				},
			],
		},
	],
})

/**
 * Transforms file to base64
 *
 * @param {File} file
 * @returns {Promise<string>}
 */
function fileToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.addEventListener('load', () => resolve(reader.result as string))
		reader.addEventListener('error', reject)
	})
}

export function CourseEdit() {
	const navigate = useNavigate()
	const courseId = useUniversalParam('courseId')
	const user = useAuthStore(state => state.user) as UserWithDoctor
	const creator = {
		connect: {
			id: user.id,
		},
	}

	const update = useUpdateCourse({
		onSuccess: () => {
			Swal.fire({
				title: 'Sucesso',
				text: 'Curso atualizado com sucesso',
				icon: 'success',
			})
			navigate('/courses')
		},
		onError: () => {
			Swal.fire({
				title: 'Error',
				text: 'Não foi possível atualizar o curso',
				icon: 'error',
			})
		},
	})
	const course = useFindFirstCourse({
		where: {
			id: courseId!,
		},
	})
	return (
		<>
			<Formik<InferType<typeof CreateCourseSchema>>
				enableReinitialize
				validationSchema={CreateCourseSchema}
				initialValues={useMemo(
					() =>
						course.data
							? {
									title: course.data.title,
									specialtyId: course.data.specialtyId,
									cover: '' as unknown as File,
									description: course.data.description,
									lessons: course.data.lessons.map(l => ({
										cuid: l.id,
										title: l.title,
										videos: l.videos.map(v => ({
											cuid: v.id,
											title: v.title,
											link: v.video,
										})),
									})),
							  }
							: getInitialData(),
					[course.data],
				)}
				// eslint-disable-next-line arrow-body-style
				onSubmit={async values => {
					// a = 1
					// await removeCourseLessons.mutateAsync({ id: courseId! })
					return update.mutate({
						id: courseId!,
						title: values.title,
						description: values.description,
						cover: values.cover ? await fileToBase64(values.cover) : undefined,
						creator,
						lessons: {
							upsert: values.lessons.map(l => {
								const data = (deletion = false) => ({
									title: l.title,
									description: '',
									creator,
									videos: {
										...(deletion && { deleteMany: {} }),
										create: l.videos.map(v => ({
											title: v.title,
											video: v.link,
										})),
									},
								})

								return {
									where: {
										id: l.cuid,
									},
									create: data(),
									update: data(true),
								}
							}),
						},
						specialty: {
							connect: {
								id: values.specialtyId,
							},
						},
					})
				}}
			>
				{({ handleSubmit }) => (
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
						<Box display="flex" alignItems="center">
							<Typography
								variant="h4"
								component="h1"
								color="secondary"
								sx={{ mb: 2, flexGrow: 1 }}
							>
								Novo curso
								<Back />
							</Typography>
							<Button
								variant="contained"
								color="secondary"
								size="large"
								onClick={() => handleSubmit()}
							>
								Salvar curso
							</Button>
						</Box>
						<Paper sx={{ p: 4 }}>
							<CourseForm />
						</Paper>
					</Box>
				)}
			</Formik>
			<LoadingOverlay show={update.isLoading} />
		</>
	)
}
