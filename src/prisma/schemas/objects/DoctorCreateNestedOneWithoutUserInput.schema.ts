import { z } from 'zod'
import { DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema'
import { DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema'
import { DoctorCreateOrConnectWithoutUserInputObjectSchema } from './DoctorCreateOrConnectWithoutUserInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutUserInput> = z.union(
	[
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutUserInputObjectSchema),
						z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => DoctorCreateOrConnectWithoutUserInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	],
)

export const DoctorCreateNestedOneWithoutUserInputObjectSchema = Schema
