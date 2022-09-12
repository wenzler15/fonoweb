import { Yup } from 'common/yup'
import { UserWithPatient } from 'user/types'
import { Specialty } from 'specialty'

export const CreateEvaluationSchema = Yup.object({
	text: Yup.string().trim(),
	title: Yup.string().trim().required(),
	patient: Yup.mixed<UserWithPatient>()
		.required()
		.defined()
		.nullable(false)
		.typeError('Paciente é obrigatório'),
	specialty: Yup.mixed<Specialty>()
		.required()
		.defined()
		.nullable(false)
		.typeError('Especialidade é obrigatória'),
})
