import { z } from 'zod'
import { EvaluationCreateInputObjectSchema } from './objects/EvaluationCreateInput.schema'

export const EvaluationCreateOneSchema = z.object({
	data: EvaluationCreateInputObjectSchema,
})
