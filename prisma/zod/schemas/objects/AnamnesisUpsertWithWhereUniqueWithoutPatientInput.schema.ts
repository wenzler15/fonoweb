import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithoutPatientInputObjectSchema } from './AnamnesisUpdateWithoutPatientInput.schema'
import { AnamnesisUncheckedUpdateWithoutPatientInputObjectSchema } from './AnamnesisUncheckedUpdateWithoutPatientInput.schema'
import { AnamnesisCreateWithoutPatientInputObjectSchema } from './AnamnesisCreateWithoutPatientInput.schema'
import { AnamnesisUncheckedCreateWithoutPatientInputObjectSchema } from './AnamnesisUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => AnamnesisUpdateWithoutPatientInputObjectSchema),
				z.lazy(() => AnamnesisUncheckedUpdateWithoutPatientInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => AnamnesisCreateWithoutPatientInputObjectSchema),
				z.lazy(() => AnamnesisUncheckedCreateWithoutPatientInputObjectSchema),
			]),
		})
		.strict()

export const AnamnesisUpsertWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
