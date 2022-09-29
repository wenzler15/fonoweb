import { z } from 'zod'
import { EvaluationScalarWhereInputObjectSchema } from './EvaluationScalarWhereInput.schema'
import { EvaluationUpdateManyMutationInputObjectSchema } from './EvaluationUpdateManyMutationInput.schema'
import { EvaluationUncheckedUpdateManyWithoutEvaluationsInputObjectSchema } from './EvaluationUncheckedUpdateManyWithoutEvaluationsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => EvaluationScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => EvaluationUpdateManyMutationInputObjectSchema),
				z.lazy(
					() =>
						EvaluationUncheckedUpdateManyWithoutEvaluationsInputObjectSchema,
				),
			]),
		})
		.strict()

export const EvaluationUpdateManyWithWhereWithoutPatientInputObjectSchema =
	Schema
