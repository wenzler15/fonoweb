import { z } from 'zod'
import { DoctorCreateWithoutEvaluationsInputObjectSchema } from './DoctorCreateWithoutEvaluationsInput.schema'
import { DoctorUncheckedCreateWithoutEvaluationsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvaluationsInput.schema'
import { DoctorCreateOrConnectWithoutEvaluationsInputObjectSchema } from './DoctorCreateOrConnectWithoutEvaluationsInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutEvaluationsInput> =
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
				connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const DoctorCreateNestedOneWithoutEvaluationsInputObjectSchema = Schema
