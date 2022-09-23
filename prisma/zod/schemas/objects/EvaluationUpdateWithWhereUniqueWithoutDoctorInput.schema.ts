import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithoutDoctorInputObjectSchema } from './EvaluationUpdateWithoutDoctorInput.schema'
import { EvaluationUncheckedUpdateWithoutDoctorInputObjectSchema } from './EvaluationUncheckedUpdateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const EvaluationUpdateWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
