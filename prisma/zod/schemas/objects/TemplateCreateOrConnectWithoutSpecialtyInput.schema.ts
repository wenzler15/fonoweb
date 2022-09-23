import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'
import { TemplateCreateWithoutSpecialtyInputObjectSchema } from './TemplateCreateWithoutSpecialtyInput.schema'
import { TemplateUncheckedCreateWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateCreateOrConnectWithoutSpecialtyInput> = z
	.object({
		where: z.lazy(() => TemplateWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const TemplateCreateOrConnectWithoutSpecialtyInputObjectSchema = Schema
