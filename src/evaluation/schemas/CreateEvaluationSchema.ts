import { Yup } from 'common/yup'
import { UserWithPatient } from 'user/types'
import { Specialty } from 'specialty'
import { ExerciseSchema } from './ExerciseSchema'

export const CreateEvaluationSchema = Yup.object({
	text: Yup.string().trim(),
	title: Yup.string().trim().required(),
	exercises: Yup.array().of(ExerciseSchema).ensure(),
	appointmentDate: Yup.date().required(),
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
