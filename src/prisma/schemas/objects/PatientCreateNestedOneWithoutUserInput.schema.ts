import { z } from 'zod'
import { PatientCreateWithoutUserInputObjectSchema } from './PatientCreateWithoutUserInput.schema'
import { PatientUncheckedCreateWithoutUserInputObjectSchema } from './PatientUncheckedCreateWithoutUserInput.schema'
import { PatientCreateOrConnectWithoutUserInputObjectSchema } from './PatientCreateOrConnectWithoutUserInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateNestedOneWithoutUserInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => PatientCreateWithoutUserInputObjectSchema),
						z.lazy(() => PatientUncheckedCreateWithoutUserInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => PatientCreateOrConnectWithoutUserInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const PatientCreateNestedOneWithoutUserInputObjectSchema = Schema
