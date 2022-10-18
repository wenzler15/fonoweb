import { z } from 'zod'
import { DoctorCreateWithoutAnamnesisInputObjectSchema } from './DoctorCreateWithoutAnamnesisInput.schema'
import { DoctorUncheckedCreateWithoutAnamnesisInputObjectSchema } from './DoctorUncheckedCreateWithoutAnamnesisInput.schema'
import { DoctorCreateOrConnectWithoutAnamnesisInputObjectSchema } from './DoctorCreateOrConnectWithoutAnamnesisInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutAnamnesisInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutAnamnesisInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedCreateWithoutAnamnesisInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => DoctorCreateOrConnectWithoutAnamnesisInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const DoctorCreateNestedOneWithoutAnamnesisInputObjectSchema = Schema
