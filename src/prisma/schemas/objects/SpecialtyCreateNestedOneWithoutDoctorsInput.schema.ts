import { z } from 'zod'
import { SpecialtyCreateWithoutDoctorsInputObjectSchema } from './SpecialtyCreateWithoutDoctorsInput.schema'
import { SpecialtyUncheckedCreateWithoutDoctorsInputObjectSchema } from './SpecialtyUncheckedCreateWithoutDoctorsInput.schema'
import { SpecialtyCreateOrConnectWithoutDoctorsInputObjectSchema } from './SpecialtyCreateOrConnectWithoutDoctorsInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateNestedOneWithoutDoctorsInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => SpecialtyCreateWithoutDoctorsInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedCreateWithoutDoctorsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => SpecialtyCreateOrConnectWithoutDoctorsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const SpecialtyCreateNestedOneWithoutDoctorsInputObjectSchema = Schema
