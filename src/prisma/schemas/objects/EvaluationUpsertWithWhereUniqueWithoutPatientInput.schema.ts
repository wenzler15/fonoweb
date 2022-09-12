import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithoutPatientInputObjectSchema } from './EvaluationUpdateWithoutPatientInput.schema'
import { EvaluationUncheckedUpdateWithoutPatientInputObjectSchema } from './EvaluationUncheckedUpdateWithoutPatientInput.schema'
import { EvaluationCreateWithoutPatientInputObjectSchema } from './EvaluationCreateWithoutPatientInput.schema'
import { EvaluationUncheckedCreateWithoutPatientInputObjectSchema } from './EvaluationUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => EvaluationUpdateWithoutPatientInputObjectSchema),
				z.lazy(() => EvaluationUncheckedUpdateWithoutPatientInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EvaluationCreateWithoutPatientInputObjectSchema),
				z.lazy(() => EvaluationUncheckedCreateWithoutPatientInputObjectSchema),
			]),
		})
		.strict()

export const EvaluationUpsertWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
