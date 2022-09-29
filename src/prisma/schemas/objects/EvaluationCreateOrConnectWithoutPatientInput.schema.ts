import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationCreateWithoutPatientInputObjectSchema } from './EvaluationCreateWithoutPatientInput.schema'
import { EvaluationUncheckedCreateWithoutPatientInputObjectSchema } from './EvaluationUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateOrConnectWithoutPatientInput> = z
	.object({
		where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => EvaluationCreateWithoutPatientInputObjectSchema),
			z.lazy(() => EvaluationUncheckedCreateWithoutPatientInputObjectSchema),
		]),
	})
	.strict()

export const EvaluationCreateOrConnectWithoutPatientInputObjectSchema = Schema
