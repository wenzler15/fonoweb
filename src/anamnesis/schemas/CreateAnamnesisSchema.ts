import { Question } from 'anamnesis/types'
import { Yup } from 'common/yup'
import { UserWithPatientSchema } from 'user/schemas'
import { UserWithPatient } from 'user/types'

export type CreateAnamnesisDto = {
	questions: Question[]
	patient: UserWithPatient
	text?: string
}

export const QuestionSchema: Yup.SchemaOf<Question> = Yup.object({
	question: Yup.string().trim().required(),
	answer: Yup.string().trim().required(),
})

export const CreateAnamnesisSchema: Yup.SchemaOf<CreateAnamnesisDto> =
	Yup.object().shape({
		questions: Yup.array(QuestionSchema).required(),
		text: Yup.string().trim(),
		patient: UserWithPatientSchema.nullable(),
	})
