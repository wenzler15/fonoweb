import { z } from 'zod'
import { SpecialtyUpdateWithoutDoctorsInputObjectSchema } from './SpecialtyUpdateWithoutDoctorsInput.schema'
import { SpecialtyUncheckedUpdateWithoutDoctorsInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutDoctorsInput.schema'
import { SpecialtyCreateWithoutDoctorsInputObjectSchema } from './SpecialtyCreateWithoutDoctorsInput.schema'
import { SpecialtyUncheckedCreateWithoutDoctorsInputObjectSchema } from './SpecialtyUncheckedCreateWithoutDoctorsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutDoctorsInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const SpecialtyUpsertWithoutDoctorsInputObjectSchema = Schema
