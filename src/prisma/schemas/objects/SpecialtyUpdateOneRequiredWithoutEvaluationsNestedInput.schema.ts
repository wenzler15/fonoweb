import { z } from 'zod'
import { SpecialtyCreateWithoutEvaluationsInputObjectSchema } from './SpecialtyCreateWithoutEvaluationsInput.schema'
import { SpecialtyUncheckedCreateWithoutEvaluationsInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvaluationsInput.schema'
import { SpecialtyCreateOrConnectWithoutEvaluationsInputObjectSchema } from './SpecialtyCreateOrConnectWithoutEvaluationsInput.schema'
import { SpecialtyUpsertWithoutEvaluationsInputObjectSchema } from './SpecialtyUpsertWithoutEvaluationsInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyUpdateWithoutEvaluationsInputObjectSchema } from './SpecialtyUpdateWithoutEvaluationsInput.schema'
import { SpecialtyUncheckedUpdateWithoutEvaluationsInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutEvaluationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpdateOneRequiredWithoutEvaluationsNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => SpecialtyCreateWithoutEvaluationsInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedCreateWithoutEvaluationsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(
						() => SpecialtyCreateOrConnectWithoutEvaluationsInputObjectSchema,
					)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => SpecialtyUpsertWithoutEvaluationsInputObjectSchema)
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
						z.lazy(() => SpecialtyUpdateWithoutEvaluationsInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedUpdateWithoutEvaluationsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const SpecialtyUpdateOneRequiredWithoutEvaluationsNestedInputObjectSchema =
	Schema
