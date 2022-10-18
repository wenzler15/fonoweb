import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationCreateWithoutSpecialtyInputObjectSchema } from './EvaluationCreateWithoutSpecialtyInput.schema'
import { EvaluationUncheckedCreateWithoutSpecialtyInputObjectSchema } from './EvaluationUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateOrConnectWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EvaluationCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(
					() => EvaluationUncheckedCreateWithoutSpecialtyInputObjectSchema,
				),
			]),
		})
		.strict()

export const EvaluationCreateOrConnectWithoutSpecialtyInputObjectSchema = Schema
