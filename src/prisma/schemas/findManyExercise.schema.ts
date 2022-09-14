import { z } from 'zod'
import { ExerciseWhereInputObjectSchema } from './objects/ExerciseWhereInput.schema'
import { ExerciseOrderByWithRelationInputObjectSchema } from './objects/ExerciseOrderByWithRelationInput.schema'
import { ExerciseWhereUniqueInputObjectSchema } from './objects/ExerciseWhereUniqueInput.schema'
import { ExerciseScalarFieldEnumSchema } from './enums/ExerciseScalarFieldEnum.schema'

export const ExerciseFindManySchema = z.object({
	where: ExerciseWhereInputObjectSchema.optional(),
	orderBy: ExerciseOrderByWithRelationInputObjectSchema.optional(),
	cursor: ExerciseWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(ExerciseScalarFieldEnumSchema).optional(),
})
