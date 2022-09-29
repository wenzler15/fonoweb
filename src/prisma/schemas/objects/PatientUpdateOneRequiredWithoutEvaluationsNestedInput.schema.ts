import { z } from 'zod'
import { PatientCreateWithoutEvaluationsInputObjectSchema } from './PatientCreateWithoutEvaluationsInput.schema'
import { PatientUncheckedCreateWithoutEvaluationsInputObjectSchema } from './PatientUncheckedCreateWithoutEvaluationsInput.schema'
import { PatientCreateOrConnectWithoutEvaluationsInputObjectSchema } from './PatientCreateOrConnectWithoutEvaluationsInput.schema'
import { PatientUpsertWithoutEvaluationsInputObjectSchema } from './PatientUpsertWithoutEvaluationsInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientUpdateWithoutEvaluationsInputObjectSchema } from './PatientUpdateWithoutEvaluationsInput.schema'
import { PatientUncheckedUpdateWithoutEvaluationsInputObjectSchema } from './PatientUncheckedUpdateWithoutEvaluationsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutEvaluationsNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => PatientCreateWithoutEvaluationsInputObjectSchema),
						z.lazy(
							() => PatientUncheckedCreateWithoutEvaluationsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => PatientCreateOrConnectWithoutEvaluationsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => PatientUpsertWithoutEvaluationsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => PatientUpdateWithoutEvaluationsInputObjectSchema),
						z.lazy(
							() => PatientUncheckedUpdateWithoutEvaluationsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const PatientUpdateOneRequiredWithoutEvaluationsNestedInputObjectSchema =
	Schema
