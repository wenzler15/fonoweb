import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithoutDoctorInputObjectSchema } from './AnamnesisUpdateWithoutDoctorInput.schema'
import { AnamnesisUncheckedUpdateWithoutDoctorInputObjectSchema } from './AnamnesisUncheckedUpdateWithoutDoctorInput.schema'
import { AnamnesisCreateWithoutDoctorInputObjectSchema } from './AnamnesisCreateWithoutDoctorInput.schema'
import { AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema } from './AnamnesisUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => AnamnesisUpdateWithoutDoctorInputObjectSchema),
				z.lazy(() => AnamnesisUncheckedUpdateWithoutDoctorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => AnamnesisCreateWithoutDoctorInputObjectSchema),
				z.lazy(() => AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema),
			]),
		})
		.strict()

export const AnamnesisUpsertWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
