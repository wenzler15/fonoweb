import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithoutPatientInputObjectSchema } from './EvaluationUpdateWithoutPatientInput.schema'
import { EvaluationUncheckedUpdateWithoutPatientInputObjectSchema } from './EvaluationUncheckedUpdateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const EvaluationUpdateWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
