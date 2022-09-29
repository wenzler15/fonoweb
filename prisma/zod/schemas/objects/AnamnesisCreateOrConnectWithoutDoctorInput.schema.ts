import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisCreateWithoutDoctorInputObjectSchema } from './AnamnesisCreateWithoutDoctorInput.schema'
import { AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema } from './AnamnesisUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisCreateOrConnectWithoutDoctorInput> = z
	.object({
		where: z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => AnamnesisCreateWithoutDoctorInputObjectSchema),
			z.lazy(() => AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema),
		]),
	})
	.strict()

export const AnamnesisCreateOrConnectWithoutDoctorInputObjectSchema = Schema
