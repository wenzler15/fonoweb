import { Yup } from 'common/yup'
import { Specialty } from 'specialty'
import { UserWithPatient } from 'user/types'

export const QuestionSchema = Yup.object({
	cuid: Yup.string().trim().required(),
	question: Yup.string().trim().required(),
	answers: Yup.string().trim().required(),
})

export const CreateAnamnesisSchema = Yup.object({
	questions: Yup.array().of(QuestionSchema).required().ensure(),
	text: Yup.string().trim().required(),
	patient: Yup.mixed<UserWithPatient>()
		.required()
		.typeError('Paciente é obrigatório'),
	specialty: Yup.mixed<Specialty>()
		.required()
		.typeError('Especialidade é obrigatória'),
})
