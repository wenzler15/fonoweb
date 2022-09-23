import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithoutDoctorInputObjectSchema } from './EvaluationUpdateWithoutDoctorInput.schema'
import { EvaluationUncheckedUpdateWithoutDoctorInputObjectSchema } from './EvaluationUncheckedUpdateWithoutDoctorInput.schema'
import { EvaluationCreateWithoutDoctorInputObjectSchema } from './EvaluationCreateWithoutDoctorInput.schema'
import { EvaluationUncheckedCreateWithoutDoctorInputObjectSchema } from './EvaluationUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const EvaluationUpsertWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
