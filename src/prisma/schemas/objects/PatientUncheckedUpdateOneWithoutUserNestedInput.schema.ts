import { z } from 'zod'
import { PatientCreateWithoutUserInputObjectSchema } from './PatientCreateWithoutUserInput.schema'
import { PatientUncheckedCreateWithoutUserInputObjectSchema } from './PatientUncheckedCreateWithoutUserInput.schema'
import { PatientCreateOrConnectWithoutUserInputObjectSchema } from './PatientCreateOrConnectWithoutUserInput.schema'
import { PatientUpsertWithoutUserInputObjectSchema } from './PatientUpsertWithoutUserInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientUpdateWithoutUserInputObjectSchema } from './PatientUpdateWithoutUserInput.schema'
import { PatientUncheckedUpdateWithoutUserInputObjectSchema } from './PatientUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientUncheckedUpdateOneWithoutUserNestedInput> =
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
				upsert: z
					.lazy(() => PatientUpsertWithoutUserInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z.boolean().optional(),
			})
			.strict(),
		z
			.object({
				delete: z.boolean().optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => PatientUpdateWithoutUserInputObjectSchema),
						z.lazy(() => PatientUncheckedUpdateWithoutUserInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	])

export const PatientUncheckedUpdateOneWithoutUserNestedInputObjectSchema =
	Schema
