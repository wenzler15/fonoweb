import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateWithoutTemplatesInputObjectSchema } from './SpecialtyCreateWithoutTemplatesInput.schema'
import { SpecialtyUncheckedCreateWithoutTemplatesInputObjectSchema } from './SpecialtyUncheckedCreateWithoutTemplatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateOrConnectWithoutTemplatesInput> =
	z
		.object({
			where: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema),
			create: z.any(),
		})
		.strict()

export const SpecialtyCreateOrConnectWithoutTemplatesInputObjectSchema = Schema
