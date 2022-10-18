import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithoutSpecialtyInputObjectSchema } from './EvaluationUpdateWithoutSpecialtyInput.schema'
import { EvaluationUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './EvaluationUncheckedUpdateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpdateWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => EvaluationUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(
					() => EvaluationUncheckedUpdateWithoutSpecialtyInputObjectSchema,
				),
			]),
		})
		.strict()

export const EvaluationUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
