import { Yup } from 'common/yup'
import { UserWithPatient } from 'user/types'
import { Specialty } from 'specialty'
import { InferType } from 'yup'
import { ExerciseSchema } from 'evaluation/schemas'

export type CreateEvaluationDto = {
	patient: UserWithPatient
	exercises: InferType<typeof ExerciseSchema>[]
	specialty: Specialty
	text?: string
	title: string
}

export const CreateEvaluationSchema = Yup.object({
	text: Yup.string().trim(),
	title: Yup.string().trim().required(),
	exercises: Yup.array().ensure(),
	patient: Yup.object()
		.required()
		.nullable(false)
		.typeError('Paciente é obrigatório'),
	specialty: Yup.object()
		.required()
		.nullable(false)
		.typeError('Especialidade é obrigatória'),
})
