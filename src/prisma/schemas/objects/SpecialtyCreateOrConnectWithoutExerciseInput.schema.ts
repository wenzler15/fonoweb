import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateWithoutExerciseInputObjectSchema } from './SpecialtyCreateWithoutExerciseInput.schema'
import { SpecialtyUncheckedCreateWithoutExerciseInputObjectSchema } from './SpecialtyUncheckedCreateWithoutExerciseInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateOrConnectWithoutExerciseInput> = z
	.object({
		where: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => SpecialtyCreateWithoutExerciseInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedCreateWithoutExerciseInputObjectSchema),
		]),
	})
	.strict()

export const SpecialtyCreateOrConnectWithoutExerciseInputObjectSchema = Schema
