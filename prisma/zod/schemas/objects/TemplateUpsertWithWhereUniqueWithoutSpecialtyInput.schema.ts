import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'
import { TemplateUpdateWithoutSpecialtyInputObjectSchema } from './TemplateUpdateWithoutSpecialtyInput.schema'
import { TemplateUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedUpdateWithoutSpecialtyInput.schema'
import { TemplateCreateWithoutSpecialtyInputObjectSchema } from './TemplateCreateWithoutSpecialtyInput.schema'
import { TemplateUncheckedCreateWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateUpsertWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => TemplateWhereUniqueInputObjectSchema),
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const TemplateUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
