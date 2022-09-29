import { z } from 'zod'
import { SpecialtyCreateWithoutExerciseInputObjectSchema } from './SpecialtyCreateWithoutExerciseInput.schema'
import { SpecialtyUncheckedCreateWithoutExerciseInputObjectSchema } from './SpecialtyUncheckedCreateWithoutExerciseInput.schema'
import { SpecialtyCreateOrConnectWithoutExerciseInputObjectSchema } from './SpecialtyCreateOrConnectWithoutExerciseInput.schema'
import { SpecialtyUpsertWithoutExerciseInputObjectSchema } from './SpecialtyUpsertWithoutExerciseInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyUpdateWithoutExerciseInputObjectSchema } from './SpecialtyUpdateWithoutExerciseInput.schema'
import { SpecialtyUncheckedUpdateWithoutExerciseInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutExerciseInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpdateOneRequiredWithoutExerciseNestedInput> =
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
				upsert: z
					.lazy(() => SpecialtyUpsertWithoutExerciseInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => SpecialtyUpdateWithoutExerciseInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedUpdateWithoutExerciseInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const SpecialtyUpdateOneRequiredWithoutExerciseNestedInputObjectSchema =
	Schema
