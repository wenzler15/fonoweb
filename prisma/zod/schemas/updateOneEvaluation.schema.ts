import { z } from 'zod'
import { EvaluationUpdateInputObjectSchema } from './objects/EvaluationUpdateInput.schema'
import { EvaluationWhereUniqueInputObjectSchema } from './objects/EvaluationWhereUniqueInput.schema'

export const EvaluationUpdateOneSchema = z.object({
	data: EvaluationUpdateInputObjectSchema,
	where: EvaluationWhereUniqueInputObjectSchema,
})
