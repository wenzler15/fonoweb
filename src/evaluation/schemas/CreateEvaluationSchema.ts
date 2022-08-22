import { Question } from 'evaluation/types'
import { Yup } from 'common/yup'
import { UserWithPatientSchema } from 'user/schemas'
import { UserWithPatient } from 'user/types'

export type CreateEvaluationDto = {
	patient: UserWithPatient
	text?: string
}

export const QuestionSchema: Yup.SchemaOf<Question> = Yup.object({
	question: Yup.string().trim().required(),
	answer: Yup.string().trim().required(),
})

export const CreateEvaluationSchema: Yup.SchemaOf<CreateEvaluationDto> =
	Yup.object().shape({
		text: Yup.string().trim(),
		patient: UserWithPatientSchema.nullable(),
	})
