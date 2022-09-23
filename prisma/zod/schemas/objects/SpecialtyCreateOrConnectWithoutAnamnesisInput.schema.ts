import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateWithoutAnamnesisInputObjectSchema } from './SpecialtyCreateWithoutAnamnesisInput.schema'
import { SpecialtyUncheckedCreateWithoutAnamnesisInputObjectSchema } from './SpecialtyUncheckedCreateWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateOrConnectWithoutAnamnesisInput> =
	z
		.object({
			where: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema),
			create: z.any(),
		})
		.strict()

export const SpecialtyCreateOrConnectWithoutAnamnesisInputObjectSchema = Schema
