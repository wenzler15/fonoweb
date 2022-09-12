import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './objects/EvaluationWhereUniqueInput.schema'

export const EvaluationFindUniqueSchema = z.object({
	where: EvaluationWhereUniqueInputObjectSchema,
})
