import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientUpdateWithoutPatientInputObjectSchema } from './DoctorPatientUpdateWithoutPatientInput.schema'
import { DoctorPatientUncheckedUpdateWithoutPatientInputObjectSchema } from './DoctorPatientUncheckedUpdateWithoutPatientInput.schema'
import { DoctorPatientCreateWithoutPatientInputObjectSchema } from './DoctorPatientCreateWithoutPatientInput.schema'
import { DoctorPatientUncheckedCreateWithoutPatientInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => DoctorPatientUpdateWithoutPatientInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedUpdateWithoutPatientInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => DoctorPatientCreateWithoutPatientInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedCreateWithoutPatientInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientUpsertWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
