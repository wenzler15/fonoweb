import { Yup } from 'common/yup'
import { UserWithPatient } from 'user/types'
import { Specialty } from 'specialty'
import { ExerciseSchema } from './ExerciseSchema'

export const CreateEvolutionSchema = Yup.object({
	text: Yup.string().trim(),
	title: Yup.string().trim().required(),
	exercises: Yup.array().of(ExerciseSchema).ensure(),
	appointmentDate: Yup.date().required(),
	// eslint-disable-next-line unicorn/no-null
	comments: Yup.string().nullable().default(null),
	patient: Yup.mixed<UserWithPatient>()
		.required()
		.defined()
		.typeError('Paciente é obrigatório'),
	specialty: Yup.mixed<Specialty>()
		.required()
		.defined()
		.typeError('Especialidade é obrigatória'),
})
