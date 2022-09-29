import { z } from 'zod'
import { UserAdressCreateManyUserInputObjectSchema } from './UserAdressCreateManyUserInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressCreateManyUserInputEnvelope> = z
	.object({
		data: z.lazy(() => UserAdressCreateManyUserInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const UserAdressCreateManyUserInputEnvelopeObjectSchema = Schema
