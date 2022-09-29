import { z } from 'zod'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientCreateWithoutAnamnesisInputObjectSchema } from './PatientCreateWithoutAnamnesisInput.schema'
import { PatientUncheckedCreateWithoutAnamnesisInputObjectSchema } from './PatientUncheckedCreateWithoutAnamnesisInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateOrConnectWithoutAnamnesisInput> = z
	.object({
		where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => PatientCreateWithoutAnamnesisInputObjectSchema),
			z.lazy(() => PatientUncheckedCreateWithoutAnamnesisInputObjectSchema),
		]),
	})
	.strict()

export const PatientCreateOrConnectWithoutAnamnesisInputObjectSchema = Schema
