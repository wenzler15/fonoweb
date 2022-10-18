import { z } from 'zod'
import { AppointmentCreateWithoutDoctorInputObjectSchema } from './AppointmentCreateWithoutDoctorInput.schema'
import { AppointmentUncheckedCreateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateWithoutDoctorInput.schema'
import { AppointmentCreateOrConnectWithoutDoctorInputObjectSchema } from './AppointmentCreateOrConnectWithoutDoctorInput.schema'
import { AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './AppointmentUpsertWithWhereUniqueWithoutDoctorInput.schema'
import { AppointmentCreateManyDoctorInputEnvelopeObjectSchema } from './AppointmentCreateManyDoctorInputEnvelope.schema'
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'
import { AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './AppointmentUpdateWithWhereUniqueWithoutDoctorInput.schema'
import { AppointmentUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './AppointmentUpdateManyWithWhereWithoutDoctorInput.schema'
import { AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutDoctorNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema),
						z
							.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema)
							.array(),
						z.lazy(
							() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema,
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
							() => AppointmentCreateOrConnectWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => AppointmentCreateOrConnectWithoutDoctorInputObjectSchema,
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
								AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => AppointmentCreateManyDoctorInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
						z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
						z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
						z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
						z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array(),
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
								AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
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
								AppointmentUpdateManyWithWhereWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AppointmentUpdateManyWithWhereWithoutDoctorInputObjectSchema,
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
						z.lazy(() => AppointmentScalarWhereInputObjectSchema),
						z.lazy(() => AppointmentScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema =
	Schema
