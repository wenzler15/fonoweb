import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithoutPatientInputObjectSchema } from './EvaluationUpdateWithoutPatientInput.schema'
import { EvaluationUncheckedUpdateWithoutPatientInputObjectSchema } from './EvaluationUncheckedUpdateWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => EvaluationUpdateWithoutPatientInputObjectSchema),
				z.lazy(() => EvaluationUncheckedUpdateWithoutPatientInputObjectSchema),
			]),
		})
		.strict()

export const EvaluationUpdateWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
