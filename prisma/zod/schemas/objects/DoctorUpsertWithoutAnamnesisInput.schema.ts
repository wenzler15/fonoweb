import { z } from 'zod'
import { DoctorUpdateWithoutAnamnesisInputObjectSchema } from './DoctorUpdateWithoutAnamnesisInput.schema'
import { DoctorUncheckedUpdateWithoutAnamnesisInputObjectSchema } from './DoctorUncheckedUpdateWithoutAnamnesisInput.schema'
import { DoctorCreateWithoutAnamnesisInputObjectSchema } from './DoctorCreateWithoutAnamnesisInput.schema'
import { DoctorUncheckedCreateWithoutAnamnesisInputObjectSchema } from './DoctorUncheckedCreateWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutAnamnesisInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const DoctorUpsertWithoutAnamnesisInputObjectSchema = Schema
