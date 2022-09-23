import { z } from 'zod'
import { DoctorUpdateWithoutTemplatesInputObjectSchema } from './DoctorUpdateWithoutTemplatesInput.schema'
import { DoctorUncheckedUpdateWithoutTemplatesInputObjectSchema } from './DoctorUncheckedUpdateWithoutTemplatesInput.schema'
import { DoctorCreateWithoutTemplatesInputObjectSchema } from './DoctorCreateWithoutTemplatesInput.schema'
import { DoctorUncheckedCreateWithoutTemplatesInputObjectSchema } from './DoctorUncheckedCreateWithoutTemplatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutTemplatesInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const DoctorUpsertWithoutTemplatesInputObjectSchema = Schema
