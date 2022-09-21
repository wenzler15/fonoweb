import { Specialty } from '@prisma/client'
import { Yup } from 'common/yup'

export const CreateExerciseSchema = Yup.object({
	title: Yup.string().trim().required(),
	specialty: Yup.mixed<Specialty>()
		.required()
		.defined()
		.typeError('Especialidade é obrigatória'),
	description: Yup.string().trim().required(),
	links: Yup.array(Yup.string().trim().url().required())
		.min(1)
		.required()
		.strict(true),
})
