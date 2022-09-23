import { z } from 'zod'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'
import { ExerciseUpdateWithoutSpecialtyInputObjectSchema } from './ExerciseUpdateWithoutSpecialtyInput.schema'
import { ExerciseUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './ExerciseUncheckedUpdateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUpdateWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const ExerciseUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
