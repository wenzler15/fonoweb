import { z } from 'zod'
import { UserContactCreateManyUserInputObjectSchema } from './UserContactCreateManyUserInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserContactCreateManyUserInputEnvelope> = z
	.object({
		data: z.lazy(() => UserContactCreateManyUserInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const UserContactCreateManyUserInputEnvelopeObjectSchema = Schema
