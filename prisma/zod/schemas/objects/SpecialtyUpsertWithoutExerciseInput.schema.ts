import { z } from 'zod'
import { SpecialtyUpdateWithoutExerciseInputObjectSchema } from './SpecialtyUpdateWithoutExerciseInput.schema'
import { SpecialtyUncheckedUpdateWithoutExerciseInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutExerciseInput.schema'
import { SpecialtyCreateWithoutExerciseInputObjectSchema } from './SpecialtyCreateWithoutExerciseInput.schema'
import { SpecialtyUncheckedCreateWithoutExerciseInputObjectSchema } from './SpecialtyUncheckedCreateWithoutExerciseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutExerciseInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const SpecialtyUpsertWithoutExerciseInputObjectSchema = Schema
