import { z } from 'zod'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'
import { ExerciseCreateWithoutSpecialtyInputObjectSchema } from './ExerciseCreateWithoutSpecialtyInput.schema'
import { ExerciseUncheckedCreateWithoutSpecialtyInputObjectSchema } from './ExerciseUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseCreateOrConnectWithoutSpecialtyInput> = z
	.object({
		where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const ExerciseCreateOrConnectWithoutSpecialtyInputObjectSchema = Schema
