import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationCreateWithoutDoctorInputObjectSchema } from './EvaluationCreateWithoutDoctorInput.schema'
import { EvaluationUncheckedCreateWithoutDoctorInputObjectSchema } from './EvaluationUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateOrConnectWithoutDoctorInput> = z
	.object({
		where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => EvaluationCreateWithoutDoctorInputObjectSchema),
			z.lazy(() => EvaluationUncheckedCreateWithoutDoctorInputObjectSchema),
		]),
	})
	.strict()

export const EvaluationCreateOrConnectWithoutDoctorInputObjectSchema = Schema
