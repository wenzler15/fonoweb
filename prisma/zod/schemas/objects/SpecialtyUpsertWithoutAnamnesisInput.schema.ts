import { z } from 'zod'
import { SpecialtyUpdateWithoutAnamnesisInputObjectSchema } from './SpecialtyUpdateWithoutAnamnesisInput.schema'
import { SpecialtyUncheckedUpdateWithoutAnamnesisInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutAnamnesisInput.schema'
import { SpecialtyCreateWithoutAnamnesisInputObjectSchema } from './SpecialtyCreateWithoutAnamnesisInput.schema'
import { SpecialtyUncheckedCreateWithoutAnamnesisInputObjectSchema } from './SpecialtyUncheckedCreateWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutAnamnesisInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const SpecialtyUpsertWithoutAnamnesisInputObjectSchema = Schema
