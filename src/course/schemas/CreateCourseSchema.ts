import { Yup } from 'common/yup'

export const VideoSchema = Yup.object({
	cuid: Yup.string().hasToExist(),
	title: Yup.string().hasToExist(),
	link: Yup.string().hasToExist(),
})

export const LessonSchema = Yup.object({
	cuid: Yup.string().hasToExist(),
	title: Yup.string().hasToExist(),
	videos: Yup.array(VideoSchema).hasToExist(),
})

export const CreateCourseSchema = Yup.object({
	title: Yup.string().hasToExist(),
	specialtyId: Yup.string().hasToExist(),
	cover: Yup.mixed().file().fileType(['image/jpeg', 'image/png']),
	description: Yup.string().hasToExist(),
	lessons: Yup.array(LessonSchema).hasToExist(),
})
