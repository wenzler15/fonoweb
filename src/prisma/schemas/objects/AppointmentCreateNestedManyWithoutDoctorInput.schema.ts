import { z } from 'zod'
import { AppointmentCreateWithoutDoctorInputObjectSchema } from './AppointmentCreateWithoutDoctorInput.schema'
import { AppointmentUncheckedCreateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateWithoutDoctorInput.schema'
import { AppointmentCreateOrConnectWithoutDoctorInputObjectSchema } from './AppointmentCreateOrConnectWithoutDoctorInput.schema'
import { AppointmentCreateManyDoctorInputEnvelopeObjectSchema } from './AppointmentCreateManyDoctorInputEnvelope.schema'
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutDoctorInput> =
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
				createMany: z
					.lazy(() => AppointmentCreateManyDoctorInputEnvelopeObjectSchema)
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
	])

export const AppointmentCreateNestedManyWithoutDoctorInputObjectSchema = Schema
