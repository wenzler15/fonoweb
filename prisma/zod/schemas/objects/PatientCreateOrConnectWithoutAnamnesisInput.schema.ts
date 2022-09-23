import { z } from 'zod'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientCreateWithoutAnamnesisInputObjectSchema } from './PatientCreateWithoutAnamnesisInput.schema'
import { PatientUncheckedCreateWithoutAnamnesisInputObjectSchema } from './PatientUncheckedCreateWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateOrConnectWithoutAnamnesisInput> = z
	.object({
		where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const PatientCreateOrConnectWithoutAnamnesisInputObjectSchema = Schema
