import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateWithoutEvaluationsInputObjectSchema } from './SpecialtyCreateWithoutEvaluationsInput.schema'
import { SpecialtyUncheckedCreateWithoutEvaluationsInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvaluationsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateOrConnectWithoutEvaluationsInput> =
	z
		.object({
			where: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => SpecialtyCreateWithoutEvaluationsInputObjectSchema),
				z.lazy(
					() => SpecialtyUncheckedCreateWithoutEvaluationsInputObjectSchema,
				),
			]),
		})
		.strict()

export const SpecialtyCreateOrConnectWithoutEvaluationsInputObjectSchema =
	Schema
