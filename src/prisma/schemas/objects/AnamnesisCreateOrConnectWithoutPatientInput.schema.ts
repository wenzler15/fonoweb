import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisCreateWithoutPatientInputObjectSchema } from './AnamnesisCreateWithoutPatientInput.schema'
import { AnamnesisUncheckedCreateWithoutPatientInputObjectSchema } from './AnamnesisUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisCreateOrConnectWithoutPatientInput> = z
	.object({
		where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => AnamnesisCreateWithoutPatientInputObjectSchema),
			z.lazy(() => AnamnesisUncheckedCreateWithoutPatientInputObjectSchema),
		]),
	})
	.strict()

export const AnamnesisCreateOrConnectWithoutPatientInputObjectSchema = Schema
