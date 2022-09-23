import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithoutSpecialtyInputObjectSchema } from './AnamnesisUpdateWithoutSpecialtyInput.schema'
import { AnamnesisUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './AnamnesisUncheckedUpdateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpdateWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const AnamnesisUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
