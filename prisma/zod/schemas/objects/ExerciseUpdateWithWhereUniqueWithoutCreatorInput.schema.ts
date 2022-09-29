import { z } from 'zod'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'
import { ExerciseUpdateWithoutCreatorInputObjectSchema } from './ExerciseUpdateWithoutCreatorInput.schema'
import { ExerciseUncheckedUpdateWithoutCreatorInputObjectSchema } from './ExerciseUncheckedUpdateWithoutCreatorInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUpdateWithWhereUniqueWithoutCreatorInput> =
	z
		.object({
			where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => ExerciseUpdateWithoutCreatorInputObjectSchema),
				z.lazy(() => ExerciseUncheckedUpdateWithoutCreatorInputObjectSchema),
			]),
		})
		.strict()

export const ExerciseUpdateWithWhereUniqueWithoutCreatorInputObjectSchema =
	Schema
