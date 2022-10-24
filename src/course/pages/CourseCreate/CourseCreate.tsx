import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAuthStore } from 'auth/providers'
import { Back, LoadingOverlay } from 'common/components'
import { CourseForm } from 'course/components/CouseForm/CourseForm'
import { useCreateCourse } from 'course/mutations/useCreateCourse'
import { CreateCourseSchema } from 'course/schemas/CreateCourseSchema'
import cuid from 'cuid'
import { Formik } from 'formik'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { UserWithDoctor } from 'user/types'
import { InferType } from 'yup'

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

export function CourseCreate() {
	const navigate = useNavigate()
	const user = useAuthStore(state => state.user) as UserWithDoctor
	const creator = {
		connect: {
			id: user.id,
		},
	}

	const create = useCreateCourse({
		onSuccess: () => {
			Swal.fire({
				title: 'Sucesso',
				text: 'Curso criado com sucesso',
				icon: 'success',
			})
			navigate('/courses')
		},
		onError: () => {
			Swal.fire({
				title: 'Error',
				text: 'Não foi possível criar o curso',
				icon: 'error',
			})
		},
	})
	return (
		<>
			<Formik<InferType<typeof CreateCourseSchema>>
				validationSchema={CreateCourseSchema}
				initialValues={useMemo(
					() => ({
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
					}),
					[],
				)}
				onSubmit={async values =>
					create.mutate({
						title: values.title,
						description: values.description,
						cover: await fileToBase64(values.cover),
						creator,
						lessons: {
							create: values.lessons.map(lesson => ({
								description: '',
								title: lesson.title,
								creator,
								videos: {
									create: lesson.videos.map(video => ({
										title: video.title,
										video: video.link,
									})),
								},
							})),
						},
						specialty: {
							connect: {
								id: values.specialtyId,
							},
						},
					})
				}
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
			<LoadingOverlay show={create.isLoading} />
		</>
	)
}
