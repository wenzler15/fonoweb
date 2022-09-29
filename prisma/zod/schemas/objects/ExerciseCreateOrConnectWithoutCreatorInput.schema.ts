import { z } from 'zod'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'
import { ExerciseCreateWithoutCreatorInputObjectSchema } from './ExerciseCreateWithoutCreatorInput.schema'
import { ExerciseUncheckedCreateWithoutCreatorInputObjectSchema } from './ExerciseUncheckedCreateWithoutCreatorInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.ExerciseCreateOrConnectWithoutCreatorInput> = z
	.object({
		where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ExerciseCreateWithoutCreatorInputObjectSchema),
			z.lazy(() => ExerciseUncheckedCreateWithoutCreatorInputObjectSchema),
		]),
	})
	.strict()

export const ExerciseCreateOrConnectWithoutCreatorInputObjectSchema = Schema
