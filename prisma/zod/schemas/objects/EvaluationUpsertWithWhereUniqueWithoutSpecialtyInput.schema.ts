import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithoutSpecialtyInputObjectSchema } from './EvaluationUpdateWithoutSpecialtyInput.schema'
import { EvaluationUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './EvaluationUncheckedUpdateWithoutSpecialtyInput.schema'
import { EvaluationCreateWithoutSpecialtyInputObjectSchema } from './EvaluationCreateWithoutSpecialtyInput.schema'
import { EvaluationUncheckedCreateWithoutSpecialtyInputObjectSchema } from './EvaluationUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpsertWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => EvaluationUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(
					() => EvaluationUncheckedUpdateWithoutSpecialtyInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => EvaluationCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(
					() => EvaluationUncheckedCreateWithoutSpecialtyInputObjectSchema,
				),
			]),
		})
		.strict()

export const EvaluationUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
