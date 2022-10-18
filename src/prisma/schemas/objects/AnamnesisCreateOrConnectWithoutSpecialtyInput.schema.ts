import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateWithoutSpecialtyInput.schema'
import { AnamnesisUncheckedCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisCreateOrConnectWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => AnamnesisCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => AnamnesisUncheckedCreateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const AnamnesisCreateOrConnectWithoutSpecialtyInputObjectSchema = Schema
