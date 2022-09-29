import { z } from 'zod'
import { ExerciseScalarWhereInputObjectSchema } from './ExerciseScalarWhereInput.schema'
import { ExerciseUpdateManyMutationInputObjectSchema } from './ExerciseUpdateManyMutationInput.schema'
import { ExerciseUncheckedUpdateManyWithoutExercisesInputObjectSchema } from './ExerciseUncheckedUpdateManyWithoutExercisesInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUpdateManyWithWhereWithoutCreatorInput> =
	z
		.object({
			where: z.lazy(() => ExerciseScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ExerciseUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => ExerciseUncheckedUpdateManyWithoutExercisesInputObjectSchema,
				),
			]),
		})
		.strict()

export const ExerciseUpdateManyWithWhereWithoutCreatorInputObjectSchema = Schema
