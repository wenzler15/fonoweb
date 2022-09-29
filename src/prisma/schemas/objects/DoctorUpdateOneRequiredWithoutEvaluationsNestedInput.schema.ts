import { z } from 'zod'
import { DoctorCreateWithoutEvaluationsInputObjectSchema } from './DoctorCreateWithoutEvaluationsInput.schema'
import { DoctorUncheckedCreateWithoutEvaluationsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvaluationsInput.schema'
import { DoctorCreateOrConnectWithoutEvaluationsInputObjectSchema } from './DoctorCreateOrConnectWithoutEvaluationsInput.schema'
import { DoctorUpsertWithoutEvaluationsInputObjectSchema } from './DoctorUpsertWithoutEvaluationsInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutEvaluationsInputObjectSchema } from './DoctorUpdateWithoutEvaluationsInput.schema'
import { DoctorUncheckedUpdateWithoutEvaluationsInputObjectSchema } from './DoctorUncheckedUpdateWithoutEvaluationsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutEvaluationsNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutEvaluationsInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedCreateWithoutEvaluationsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => DoctorCreateOrConnectWithoutEvaluationsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => DoctorUpsertWithoutEvaluationsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => DoctorUpdateWithoutEvaluationsInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedUpdateWithoutEvaluationsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const DoctorUpdateOneRequiredWithoutEvaluationsNestedInputObjectSchema =
	Schema
