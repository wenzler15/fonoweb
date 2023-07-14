import { z } from 'zod'
import { UserContactCreateManyUserInputObjectSchema } from './UserContactCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserContactCreateManyUserInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => UserContactCreateManyUserInputObjectSchema),
			z.lazy(() => UserContactCreateManyUserInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const UserContactCreateManyUserInputEnvelopeObjectSchema = Schema
