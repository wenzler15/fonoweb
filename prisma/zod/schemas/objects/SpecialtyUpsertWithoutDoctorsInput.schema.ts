import { z } from 'zod'
import { SpecialtyUpdateWithoutDoctorsInputObjectSchema } from './SpecialtyUpdateWithoutDoctorsInput.schema'
import { SpecialtyUncheckedUpdateWithoutDoctorsInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutDoctorsInput.schema'
import { SpecialtyCreateWithoutDoctorsInputObjectSchema } from './SpecialtyCreateWithoutDoctorsInput.schema'
import { SpecialtyUncheckedCreateWithoutDoctorsInputObjectSchema } from './SpecialtyUncheckedCreateWithoutDoctorsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutDoctorsInput> = z
	.object({
		update: z.union([
			z.lazy(() => SpecialtyUpdateWithoutDoctorsInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedUpdateWithoutDoctorsInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => SpecialtyCreateWithoutDoctorsInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedCreateWithoutDoctorsInputObjectSchema),
		]),
	})
	.strict()

export const SpecialtyUpsertWithoutDoctorsInputObjectSchema = Schema
