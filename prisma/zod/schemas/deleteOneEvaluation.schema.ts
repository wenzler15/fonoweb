import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './objects/EvaluationWhereUniqueInput.schema'

export const EvaluationDeleteOneSchema = z.object({
	where: EvaluationWhereUniqueInputObjectSchema,
})
