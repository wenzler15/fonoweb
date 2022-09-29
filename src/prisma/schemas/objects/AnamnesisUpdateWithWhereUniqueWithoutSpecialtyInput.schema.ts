import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithoutSpecialtyInputObjectSchema } from './AnamnesisUpdateWithoutSpecialtyInput.schema'
import { AnamnesisUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './AnamnesisUncheckedUpdateWithoutSpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpdateWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => AnamnesisUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => AnamnesisUncheckedUpdateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const AnamnesisUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
