import { z } from 'zod'
import { PatientUpdateWithoutAnamnesisInputObjectSchema } from './PatientUpdateWithoutAnamnesisInput.schema'
import { PatientUncheckedUpdateWithoutAnamnesisInputObjectSchema } from './PatientUncheckedUpdateWithoutAnamnesisInput.schema'
import { PatientCreateWithoutAnamnesisInputObjectSchema } from './PatientCreateWithoutAnamnesisInput.schema'
import { PatientUncheckedCreateWithoutAnamnesisInputObjectSchema } from './PatientUncheckedCreateWithoutAnamnesisInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutAnamnesisInput> = z
	.object({
		update: z.union([
			z.lazy(() => PatientUpdateWithoutAnamnesisInputObjectSchema),
			z.lazy(() => PatientUncheckedUpdateWithoutAnamnesisInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => PatientCreateWithoutAnamnesisInputObjectSchema),
			z.lazy(() => PatientUncheckedCreateWithoutAnamnesisInputObjectSchema),
		]),
	})
	.strict()

export const PatientUpsertWithoutAnamnesisInputObjectSchema = Schema
