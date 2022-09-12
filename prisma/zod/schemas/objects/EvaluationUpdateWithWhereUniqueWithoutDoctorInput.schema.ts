import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithoutDoctorInputObjectSchema } from './EvaluationUpdateWithoutDoctorInput.schema'
import { EvaluationUncheckedUpdateWithoutDoctorInputObjectSchema } from './EvaluationUncheckedUpdateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => EvaluationUpdateWithoutDoctorInputObjectSchema),
				z.lazy(() => EvaluationUncheckedUpdateWithoutDoctorInputObjectSchema),
			]),
		})
		.strict()

export const EvaluationUpdateWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
