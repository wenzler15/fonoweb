import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'
import { TemplateUpdateWithoutSpecialtyInputObjectSchema } from './TemplateUpdateWithoutSpecialtyInput.schema'
import { TemplateUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedUpdateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateUpdateWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => TemplateWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const TemplateUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
