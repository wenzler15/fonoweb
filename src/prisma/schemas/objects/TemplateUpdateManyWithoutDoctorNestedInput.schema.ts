import { z } from 'zod'
import { TemplateCreateWithoutDoctorInputObjectSchema } from './TemplateCreateWithoutDoctorInput.schema'
import { TemplateUncheckedCreateWithoutDoctorInputObjectSchema } from './TemplateUncheckedCreateWithoutDoctorInput.schema'
import { TemplateCreateOrConnectWithoutDoctorInputObjectSchema } from './TemplateCreateOrConnectWithoutDoctorInput.schema'
import { TemplateUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './TemplateUpsertWithWhereUniqueWithoutDoctorInput.schema'
import { TemplateCreateManyDoctorInputEnvelopeObjectSchema } from './TemplateCreateManyDoctorInputEnvelope.schema'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'
import { TemplateUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './TemplateUpdateWithWhereUniqueWithoutDoctorInput.schema'
import { TemplateUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './TemplateUpdateManyWithWhereWithoutDoctorInput.schema'
import { TemplateScalarWhereInputObjectSchema } from './TemplateScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.TemplateUpdateManyWithoutDoctorNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => TemplateCreateWithoutDoctorInputObjectSchema),
						z.lazy(() => TemplateCreateWithoutDoctorInputObjectSchema).array(),
						z.lazy(() => TemplateUncheckedCreateWithoutDoctorInputObjectSchema),
						z
							.lazy(() => TemplateUncheckedCreateWithoutDoctorInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(() => TemplateCreateOrConnectWithoutDoctorInputObjectSchema),
						z
							.lazy(() => TemplateCreateOrConnectWithoutDoctorInputObjectSchema)
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
							() => TemplateUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									TemplateUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => TemplateCreateManyDoctorInputEnvelopeObjectSchema)
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
							() => TemplateUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									TemplateUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
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
							() => TemplateUpdateManyWithWhereWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => TemplateUpdateManyWithWhereWithoutDoctorInputObjectSchema,
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

export const TemplateUpdateManyWithoutDoctorNestedInputObjectSchema = Schema
