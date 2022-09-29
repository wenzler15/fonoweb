import { z } from 'zod'
import { TemplateCreateWithoutSpecialtyInputObjectSchema } from './TemplateCreateWithoutSpecialtyInput.schema'
import { TemplateUncheckedCreateWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedCreateWithoutSpecialtyInput.schema'
import { TemplateCreateOrConnectWithoutSpecialtyInputObjectSchema } from './TemplateCreateOrConnectWithoutSpecialtyInput.schema'
import { TemplateUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './TemplateUpsertWithWhereUniqueWithoutSpecialtyInput.schema'
import { TemplateCreateManySpecialtyInputEnvelopeObjectSchema } from './TemplateCreateManySpecialtyInputEnvelope.schema'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'
import { TemplateUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './TemplateUpdateWithWhereUniqueWithoutSpecialtyInput.schema'
import { TemplateUpdateManyWithWhereWithoutSpecialtyInputObjectSchema } from './TemplateUpdateManyWithWhereWithoutSpecialtyInput.schema'
import { TemplateScalarWhereInputObjectSchema } from './TemplateScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.TemplateUncheckedUpdateManyWithoutSpecialtyNestedInput> =
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
				upsert: z
					.union([
						z.lazy(
							() =>
								TemplateUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									TemplateUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
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
				set: z
					.union([
						z.lazy(() => TemplateWhereUniqueInputObjectSchema),
						z.lazy(() => TemplateWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => TemplateWhereUniqueInputObjectSchema),
						z.lazy(() => TemplateWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => TemplateWhereUniqueInputObjectSchema),
						z.lazy(() => TemplateWhereUniqueInputObjectSchema).array(),
					])
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
		z
			.object({
				update: z
					.union([
						z.lazy(
							() =>
								TemplateUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									TemplateUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				updateMany: z
					.union([
						z.lazy(
							() =>
								TemplateUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									TemplateUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				deleteMany: z
					.union([
						z.lazy(() => TemplateScalarWhereInputObjectSchema),
						z.lazy(() => TemplateScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const TemplateUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema =
	Schema
