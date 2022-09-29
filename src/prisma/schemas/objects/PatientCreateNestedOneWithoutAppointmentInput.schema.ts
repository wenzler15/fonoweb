import { z } from 'zod'
import { PatientCreateWithoutAppointmentInputObjectSchema } from './PatientCreateWithoutAppointmentInput.schema'
import { PatientUncheckedCreateWithoutAppointmentInputObjectSchema } from './PatientUncheckedCreateWithoutAppointmentInput.schema'
import { PatientCreateOrConnectWithoutAppointmentInputObjectSchema } from './PatientCreateOrConnectWithoutAppointmentInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateNestedOneWithoutAppointmentInput> =
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
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const PatientCreateNestedOneWithoutAppointmentInputObjectSchema = Schema
