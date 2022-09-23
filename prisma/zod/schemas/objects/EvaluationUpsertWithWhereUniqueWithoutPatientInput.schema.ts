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
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const EvaluationUpsertWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
