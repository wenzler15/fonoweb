import { z } from 'zod'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'
import { ExerciseUpdateWithoutCreatorInputObjectSchema } from './ExerciseUpdateWithoutCreatorInput.schema'
import { ExerciseUncheckedUpdateWithoutCreatorInputObjectSchema } from './ExerciseUncheckedUpdateWithoutCreatorInput.schema'
import { ExerciseCreateWithoutCreatorInputObjectSchema } from './ExerciseCreateWithoutCreatorInput.schema'
import { ExerciseUncheckedCreateWithoutCreatorInputObjectSchema } from './ExerciseUncheckedCreateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUpsertWithWhereUniqueWithoutCreatorInput> =
	z
		.object({
			where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const ExerciseUpsertWithWhereUniqueWithoutCreatorInputObjectSchema =
	Schema
