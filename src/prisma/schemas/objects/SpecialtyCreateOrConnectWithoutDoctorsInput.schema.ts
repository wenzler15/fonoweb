import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateWithoutDoctorsInputObjectSchema } from './SpecialtyCreateWithoutDoctorsInput.schema'
import { SpecialtyUncheckedCreateWithoutDoctorsInputObjectSchema } from './SpecialtyUncheckedCreateWithoutDoctorsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateOrConnectWithoutDoctorsInput> = z
	.object({
		where: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => SpecialtyCreateWithoutDoctorsInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedCreateWithoutDoctorsInputObjectSchema),
		]),
	})
	.strict()

export const SpecialtyCreateOrConnectWithoutDoctorsInputObjectSchema = Schema
