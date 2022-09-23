import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutTemplatesInputObjectSchema } from './DoctorCreateWithoutTemplatesInput.schema'
import { DoctorUncheckedCreateWithoutTemplatesInputObjectSchema } from './DoctorUncheckedCreateWithoutTemplatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutTemplatesInput> = z
	.object({
		where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const DoctorCreateOrConnectWithoutTemplatesInputObjectSchema = Schema
