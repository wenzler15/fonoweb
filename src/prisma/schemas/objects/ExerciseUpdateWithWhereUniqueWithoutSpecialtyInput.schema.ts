import { z } from 'zod'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'
import { ExerciseUpdateWithoutSpecialtyInputObjectSchema } from './ExerciseUpdateWithoutSpecialtyInput.schema'
import { ExerciseUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './ExerciseUncheckedUpdateWithoutSpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUpdateWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => ExerciseUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => ExerciseUncheckedUpdateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const ExerciseUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
