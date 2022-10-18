import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithoutDoctorInputObjectSchema } from './AnamnesisUpdateWithoutDoctorInput.schema'
import { AnamnesisUncheckedUpdateWithoutDoctorInputObjectSchema } from './AnamnesisUncheckedUpdateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => AnamnesisUpdateWithoutDoctorInputObjectSchema),
				z.lazy(() => AnamnesisUncheckedUpdateWithoutDoctorInputObjectSchema),
			]),
		})
		.strict()

export const AnamnesisUpdateWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
