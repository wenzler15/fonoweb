import { z } from 'zod'
import { SpecialtyUpdateWithoutTemplatesInputObjectSchema } from './SpecialtyUpdateWithoutTemplatesInput.schema'
import { SpecialtyUncheckedUpdateWithoutTemplatesInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutTemplatesInput.schema'
import { SpecialtyCreateWithoutTemplatesInputObjectSchema } from './SpecialtyCreateWithoutTemplatesInput.schema'
import { SpecialtyUncheckedCreateWithoutTemplatesInputObjectSchema } from './SpecialtyUncheckedCreateWithoutTemplatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutTemplatesInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const SpecialtyUpsertWithoutTemplatesInputObjectSchema = Schema
