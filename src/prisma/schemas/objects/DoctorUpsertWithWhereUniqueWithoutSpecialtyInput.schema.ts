import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutSpecialtyInputObjectSchema } from './DoctorUpdateWithoutSpecialtyInput.schema'
import { DoctorUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedUpdateWithoutSpecialtyInput.schema'
import { DoctorCreateWithoutSpecialtyInputObjectSchema } from './DoctorCreateWithoutSpecialtyInput.schema'
import { DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => DoctorUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutSpecialtyInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const DoctorUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
