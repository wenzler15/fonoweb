import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutEvaluationsInputObjectSchema } from './DoctorCreateWithoutEvaluationsInput.schema'
import { DoctorUncheckedCreateWithoutEvaluationsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvaluationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutEvaluationsInput> = z
	.object({
		where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const DoctorCreateOrConnectWithoutEvaluationsInputObjectSchema = Schema
