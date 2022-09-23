import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithoutPatientInputObjectSchema } from './AnamnesisUpdateWithoutPatientInput.schema'
import { AnamnesisUncheckedUpdateWithoutPatientInputObjectSchema } from './AnamnesisUncheckedUpdateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const AnamnesisUpdateWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
