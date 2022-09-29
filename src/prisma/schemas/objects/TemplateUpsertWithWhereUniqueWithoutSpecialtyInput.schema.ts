import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'
import { TemplateUpdateWithoutSpecialtyInputObjectSchema } from './TemplateUpdateWithoutSpecialtyInput.schema'
import { TemplateUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedUpdateWithoutSpecialtyInput.schema'
import { TemplateCreateWithoutSpecialtyInputObjectSchema } from './TemplateCreateWithoutSpecialtyInput.schema'
import { TemplateUncheckedCreateWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.TemplateUpsertWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => TemplateWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => TemplateUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => TemplateUncheckedUpdateWithoutSpecialtyInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => TemplateCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => TemplateUncheckedCreateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const TemplateUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
