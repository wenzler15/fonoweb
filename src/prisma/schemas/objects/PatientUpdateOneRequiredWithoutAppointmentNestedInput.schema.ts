import { z } from 'zod'
import { PatientCreateWithoutAppointmentInputObjectSchema } from './PatientCreateWithoutAppointmentInput.schema'
import { PatientUncheckedCreateWithoutAppointmentInputObjectSchema } from './PatientUncheckedCreateWithoutAppointmentInput.schema'
import { PatientCreateOrConnectWithoutAppointmentInputObjectSchema } from './PatientCreateOrConnectWithoutAppointmentInput.schema'
import { PatientUpsertWithoutAppointmentInputObjectSchema } from './PatientUpsertWithoutAppointmentInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientUpdateWithoutAppointmentInputObjectSchema } from './PatientUpdateWithoutAppointmentInput.schema'
import { PatientUncheckedUpdateWithoutAppointmentInputObjectSchema } from './PatientUncheckedUpdateWithoutAppointmentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutAppointmentNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => PatientCreateWithoutAppointmentInputObjectSchema),
						z.lazy(
							() => PatientUncheckedCreateWithoutAppointmentInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => PatientCreateOrConnectWithoutAppointmentInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => PatientUpsertWithoutAppointmentInputObjectSchema)
					.optional(),
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
						z.lazy(() => PatientUpdateWithoutAppointmentInputObjectSchema),
						z.lazy(
							() => PatientUncheckedUpdateWithoutAppointmentInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const PatientUpdateOneRequiredWithoutAppointmentNestedInputObjectSchema =
	Schema
