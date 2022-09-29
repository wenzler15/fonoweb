import { z } from 'zod'
import { SpecialtyCreateWithoutEvaluationsInputObjectSchema } from './SpecialtyCreateWithoutEvaluationsInput.schema'
import { SpecialtyUncheckedCreateWithoutEvaluationsInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvaluationsInput.schema'
import { SpecialtyCreateOrConnectWithoutEvaluationsInputObjectSchema } from './SpecialtyCreateOrConnectWithoutEvaluationsInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateNestedOneWithoutEvaluationsInput> =
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
				connect: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const SpecialtyCreateNestedOneWithoutEvaluationsInputObjectSchema =
	Schema
