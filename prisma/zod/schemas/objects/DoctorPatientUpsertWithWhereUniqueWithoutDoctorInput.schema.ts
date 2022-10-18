import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientUpdateWithoutDoctorInputObjectSchema } from './DoctorPatientUpdateWithoutDoctorInput.schema'
import { DoctorPatientUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorPatientUncheckedUpdateWithoutDoctorInput.schema'
import { DoctorPatientCreateWithoutDoctorInputObjectSchema } from './DoctorPatientCreateWithoutDoctorInput.schema'
import { DoctorPatientUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => DoctorPatientUpdateWithoutDoctorInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedUpdateWithoutDoctorInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => DoctorPatientCreateWithoutDoctorInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedCreateWithoutDoctorInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientUpsertWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
