import { z } from 'zod'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'
import { ExerciseUpdateWithoutSpecialtyInputObjectSchema } from './ExerciseUpdateWithoutSpecialtyInput.schema'
import { ExerciseUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './ExerciseUncheckedUpdateWithoutSpecialtyInput.schema'
import { ExerciseCreateWithoutSpecialtyInputObjectSchema } from './ExerciseCreateWithoutSpecialtyInput.schema'
import { ExerciseUncheckedCreateWithoutSpecialtyInputObjectSchema } from './ExerciseUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUpsertWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const ExerciseUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
