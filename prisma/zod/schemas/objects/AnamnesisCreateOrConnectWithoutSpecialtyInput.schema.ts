import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateWithoutSpecialtyInput.schema'
import { AnamnesisUncheckedCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisCreateOrConnectWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
			create: z.any(),
		})
		.strict()

export const AnamnesisCreateOrConnectWithoutSpecialtyInputObjectSchema = Schema
