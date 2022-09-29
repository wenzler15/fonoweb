import { z } from 'zod'
import { PatientCreateWithoutAnamnesisInputObjectSchema } from './PatientCreateWithoutAnamnesisInput.schema'
import { PatientUncheckedCreateWithoutAnamnesisInputObjectSchema } from './PatientUncheckedCreateWithoutAnamnesisInput.schema'
import { PatientCreateOrConnectWithoutAnamnesisInputObjectSchema } from './PatientCreateOrConnectWithoutAnamnesisInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateNestedOneWithoutAnamnesisInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => PatientCreateWithoutAnamnesisInputObjectSchema),
						z.lazy(
							() => PatientUncheckedCreateWithoutAnamnesisInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => PatientCreateOrConnectWithoutAnamnesisInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const PatientCreateNestedOneWithoutAnamnesisInputObjectSchema = Schema
