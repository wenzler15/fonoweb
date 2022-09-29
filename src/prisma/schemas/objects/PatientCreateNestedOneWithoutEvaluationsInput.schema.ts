import { z } from 'zod'
import { PatientCreateWithoutEvaluationsInputObjectSchema } from './PatientCreateWithoutEvaluationsInput.schema'
import { PatientUncheckedCreateWithoutEvaluationsInputObjectSchema } from './PatientUncheckedCreateWithoutEvaluationsInput.schema'
import { PatientCreateOrConnectWithoutEvaluationsInputObjectSchema } from './PatientCreateOrConnectWithoutEvaluationsInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateNestedOneWithoutEvaluationsInput> =
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
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const PatientCreateNestedOneWithoutEvaluationsInputObjectSchema = Schema
