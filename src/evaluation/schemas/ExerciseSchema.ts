import { Yup } from 'common/yup'

export const ExerciseSchema = Yup.object({
	cuid: Yup.string().required(),
	title: Yup.string().trim().required(),
	description: Yup.string().trim().required(),
})
