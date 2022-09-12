import { z } from 'zod'
import { UserTypeSchema } from '../enums/UserType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumUserTypeFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => UserTypeSchema).optional(),
	})
	.strict()

export const EnumUserTypeFieldUpdateOperationsInputObjectSchema = Schema
