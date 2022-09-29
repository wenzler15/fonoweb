import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateWithoutTemplatesInputObjectSchema } from './SpecialtyCreateWithoutTemplatesInput.schema'
import { SpecialtyUncheckedCreateWithoutTemplatesInputObjectSchema } from './SpecialtyUncheckedCreateWithoutTemplatesInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateOrConnectWithoutTemplatesInput> =
	z
		.object({
			where: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => SpecialtyCreateWithoutTemplatesInputObjectSchema),
				z.lazy(() => SpecialtyUncheckedCreateWithoutTemplatesInputObjectSchema),
			]),
		})
		.strict()

export const SpecialtyCreateOrConnectWithoutTemplatesInputObjectSchema = Schema
