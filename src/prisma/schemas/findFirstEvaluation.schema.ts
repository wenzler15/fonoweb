import { z } from 'zod'
import { EvaluationWhereInputObjectSchema } from './objects/EvaluationWhereInput.schema'
import { EvaluationOrderByWithRelationInputObjectSchema } from './objects/EvaluationOrderByWithRelationInput.schema'
import { EvaluationWhereUniqueInputObjectSchema } from './objects/EvaluationWhereUniqueInput.schema'
import { EvaluationScalarFieldEnumSchema } from './enums/EvaluationScalarFieldEnum.schema'

export const EvaluationFindFirstSchema = z.object({
	where: EvaluationWhereInputObjectSchema.optional(),
	orderBy: EvaluationOrderByWithRelationInputObjectSchema.optional(),
	cursor: EvaluationWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(EvaluationScalarFieldEnumSchema).optional(),
})
