import { z } from 'zod'
import { SpecialtyCreateWithoutExerciseInputObjectSchema } from './SpecialtyCreateWithoutExerciseInput.schema'
import { SpecialtyUncheckedCreateWithoutExerciseInputObjectSchema } from './SpecialtyUncheckedCreateWithoutExerciseInput.schema'
import { SpecialtyCreateOrConnectWithoutExerciseInputObjectSchema } from './SpecialtyCreateOrConnectWithoutExerciseInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateNestedOneWithoutExerciseInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => SpecialtyCreateWithoutExerciseInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedCreateWithoutExerciseInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => SpecialtyCreateOrConnectWithoutExerciseInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const SpecialtyCreateNestedOneWithoutExerciseInputObjectSchema = Schema
