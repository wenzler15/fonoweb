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
			update: z.union([
				z.lazy(() => ExerciseUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => ExerciseUncheckedUpdateWithoutSpecialtyInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => ExerciseCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => ExerciseUncheckedCreateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const ExerciseUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
