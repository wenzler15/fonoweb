import { z } from 'zod'
import { SpecialtyUpdateWithoutExerciseInputObjectSchema } from './SpecialtyUpdateWithoutExerciseInput.schema'
import { SpecialtyUncheckedUpdateWithoutExerciseInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutExerciseInput.schema'
import { SpecialtyCreateWithoutExerciseInputObjectSchema } from './SpecialtyCreateWithoutExerciseInput.schema'
import { SpecialtyUncheckedCreateWithoutExerciseInputObjectSchema } from './SpecialtyUncheckedCreateWithoutExerciseInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutExerciseInput> = z
	.object({
		update: z.union([
			z.lazy(() => SpecialtyUpdateWithoutExerciseInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedUpdateWithoutExerciseInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => SpecialtyCreateWithoutExerciseInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedCreateWithoutExerciseInputObjectSchema),
		]),
	})
	.strict()

export const SpecialtyUpsertWithoutExerciseInputObjectSchema = Schema
