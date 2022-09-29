import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientUpdateWithoutAssignedByInputObjectSchema } from './DoctorPatientUpdateWithoutAssignedByInput.schema'
import { DoctorPatientUncheckedUpdateWithoutAssignedByInputObjectSchema } from './DoctorPatientUncheckedUpdateWithoutAssignedByInput.schema'
import { DoctorPatientCreateWithoutAssignedByInputObjectSchema } from './DoctorPatientCreateWithoutAssignedByInput.schema'
import { DoctorPatientUncheckedCreateWithoutAssignedByInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutAssignedByInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpsertWithWhereUniqueWithoutAssignedByInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => DoctorPatientUpdateWithoutAssignedByInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedUpdateWithoutAssignedByInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => DoctorPatientCreateWithoutAssignedByInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedCreateWithoutAssignedByInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientUpsertWithWhereUniqueWithoutAssignedByInputObjectSchema =
	Schema
