import { z } from 'zod'
import { DoctorUpdateWithoutAnamnesisInputObjectSchema } from './DoctorUpdateWithoutAnamnesisInput.schema'
import { DoctorUncheckedUpdateWithoutAnamnesisInputObjectSchema } from './DoctorUncheckedUpdateWithoutAnamnesisInput.schema'
import { DoctorCreateWithoutAnamnesisInputObjectSchema } from './DoctorCreateWithoutAnamnesisInput.schema'
import { DoctorUncheckedCreateWithoutAnamnesisInputObjectSchema } from './DoctorUncheckedCreateWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutAnamnesisInput> = z
	.object({
		update: z.union([
			z.lazy(() => DoctorUpdateWithoutAnamnesisInputObjectSchema),
			z.lazy(() => DoctorUncheckedUpdateWithoutAnamnesisInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => DoctorCreateWithoutAnamnesisInputObjectSchema),
			z.lazy(() => DoctorUncheckedCreateWithoutAnamnesisInputObjectSchema),
		]),
	})
	.strict()

export const DoctorUpsertWithoutAnamnesisInputObjectSchema = Schema
