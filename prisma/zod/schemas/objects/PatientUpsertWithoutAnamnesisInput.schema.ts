import { z } from 'zod'
import { PatientUpdateWithoutAnamnesisInputObjectSchema } from './PatientUpdateWithoutAnamnesisInput.schema'
import { PatientUncheckedUpdateWithoutAnamnesisInputObjectSchema } from './PatientUncheckedUpdateWithoutAnamnesisInput.schema'
import { PatientCreateWithoutAnamnesisInputObjectSchema } from './PatientCreateWithoutAnamnesisInput.schema'
import { PatientUncheckedCreateWithoutAnamnesisInputObjectSchema } from './PatientUncheckedCreateWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutAnamnesisInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const PatientUpsertWithoutAnamnesisInputObjectSchema = Schema
