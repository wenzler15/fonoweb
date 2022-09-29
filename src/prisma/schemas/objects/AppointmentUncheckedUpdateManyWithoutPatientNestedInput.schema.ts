import { z } from 'zod'
import { AppointmentCreateWithoutPatientInputObjectSchema } from './AppointmentCreateWithoutPatientInput.schema'
import { AppointmentUncheckedCreateWithoutPatientInputObjectSchema } from './AppointmentUncheckedCreateWithoutPatientInput.schema'
import { AppointmentCreateOrConnectWithoutPatientInputObjectSchema } from './AppointmentCreateOrConnectWithoutPatientInput.schema'
import { AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './AppointmentUpsertWithWhereUniqueWithoutPatientInput.schema'
import { AppointmentCreateManyPatientInputEnvelopeObjectSchema } from './AppointmentCreateManyPatientInputEnvelope.schema'
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'
import { AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './AppointmentUpdateWithWhereUniqueWithoutPatientInput.schema'
import { AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema } from './AppointmentUpdateManyWithWhereWithoutPatientInput.schema'
import { AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutPatientNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema),
						z
							.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema)
							.array(),
						z.lazy(
							() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema,
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
							() => AppointmentCreateOrConnectWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => AppointmentCreateOrConnectWithoutPatientInputObjectSchema,
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
								AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => AppointmentCreateManyPatientInputEnvelopeObjectSchema)
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
								AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
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
								AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema,
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

export const AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema =
	Schema
