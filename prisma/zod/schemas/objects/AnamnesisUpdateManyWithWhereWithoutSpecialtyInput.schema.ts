import { z } from 'zod'
import { AnamnesisScalarWhereInputObjectSchema } from './AnamnesisScalarWhereInput.schema'
import { AnamnesisUpdateManyMutationInputObjectSchema } from './AnamnesisUpdateManyMutationInput.schema'
import { AnamnesisUncheckedUpdateManyWithoutAnamnesisInputObjectSchema } from './AnamnesisUncheckedUpdateManyWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpdateManyWithWhereWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => AnamnesisUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => AnamnesisUncheckedUpdateManyWithoutAnamnesisInputObjectSchema,
				),
			]),
		})
		.strict()

export const AnamnesisUpdateManyWithWhereWithoutSpecialtyInputObjectSchema =
	Schema
