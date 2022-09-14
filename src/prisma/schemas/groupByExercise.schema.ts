import { z } from 'zod'
import { ExerciseWhereInputObjectSchema } from './objects/ExerciseWhereInput.schema'
import { ExerciseOrderByWithAggregationInputObjectSchema } from './objects/ExerciseOrderByWithAggregationInput.schema'
import { ExerciseScalarWhereWithAggregatesInputObjectSchema } from './objects/ExerciseScalarWhereWithAggregatesInput.schema'
import { ExerciseScalarFieldEnumSchema } from './enums/ExerciseScalarFieldEnum.schema'

export const ExerciseGroupBySchema = z.object({
	where: ExerciseWhereInputObjectSchema.optional(),
	orderBy: ExerciseOrderByWithAggregationInputObjectSchema,
	having: ExerciseScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(ExerciseScalarFieldEnumSchema),
})
