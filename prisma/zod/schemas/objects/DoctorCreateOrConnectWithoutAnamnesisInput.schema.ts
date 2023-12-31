import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutAnamnesisInputObjectSchema } from './DoctorCreateWithoutAnamnesisInput.schema'
import { DoctorUncheckedCreateWithoutAnamnesisInputObjectSchema } from './DoctorUncheckedCreateWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutAnamnesisInput> = z
	.object({
		where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => DoctorCreateWithoutAnamnesisInputObjectSchema),
			z.lazy(() => DoctorUncheckedCreateWithoutAnamnesisInputObjectSchema),
		]),
	})
	.strict()

export const DoctorCreateOrConnectWithoutAnamnesisInputObjectSchema = Schema
