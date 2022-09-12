import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithoutSpecialtyInputObjectSchema } from './AnamnesisUpdateWithoutSpecialtyInput.schema'
import { AnamnesisUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './AnamnesisUncheckedUpdateWithoutSpecialtyInput.schema'
import { AnamnesisCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateWithoutSpecialtyInput.schema'
import { AnamnesisUncheckedCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpsertWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => AnamnesisUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => AnamnesisUncheckedUpdateWithoutSpecialtyInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => AnamnesisCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => AnamnesisUncheckedCreateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const AnamnesisUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
