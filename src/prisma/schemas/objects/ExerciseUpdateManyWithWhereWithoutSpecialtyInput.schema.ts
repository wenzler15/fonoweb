import { z } from 'zod'
import { ExerciseScalarWhereInputObjectSchema } from './ExerciseScalarWhereInput.schema'
import { ExerciseUpdateManyMutationInputObjectSchema } from './ExerciseUpdateManyMutationInput.schema'
import { ExerciseUncheckedUpdateManyWithoutExerciseInputObjectSchema } from './ExerciseUncheckedUpdateManyWithoutExerciseInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUpdateManyWithWhereWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => ExerciseScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ExerciseUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => ExerciseUncheckedUpdateManyWithoutExerciseInputObjectSchema,
				),
			]),
		})
		.strict()

export const ExerciseUpdateManyWithWhereWithoutSpecialtyInputObjectSchema =
	Schema
