import { z } from 'zod'
import { TemplateCreateWithoutSpecialtyInputObjectSchema } from './TemplateCreateWithoutSpecialtyInput.schema'
import { TemplateUncheckedCreateWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedCreateWithoutSpecialtyInput.schema'
import { TemplateCreateOrConnectWithoutSpecialtyInputObjectSchema } from './TemplateCreateOrConnectWithoutSpecialtyInput.schema'
import { TemplateCreateManySpecialtyInputEnvelopeObjectSchema } from './TemplateCreateManySpecialtyInputEnvelope.schema'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.TemplateCreateNestedManyWithoutSpecialtyInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => TemplateCreateWithoutSpecialtyInputObjectSchema),
						z
							.lazy(() => TemplateCreateWithoutSpecialtyInputObjectSchema)
							.array(),
						z.lazy(
							() => TemplateUncheckedCreateWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => TemplateUncheckedCreateWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(
							() => TemplateCreateOrConnectWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => TemplateCreateOrConnectWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => TemplateCreateManySpecialtyInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => TemplateWhereUniqueInputObjectSchema),
						z.lazy(() => TemplateWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const TemplateCreateNestedManyWithoutSpecialtyInputObjectSchema = Schema
