import { z } from 'zod'
import { UserAdressCreateManyUserInputObjectSchema } from './UserAdressCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressCreateManyUserInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => UserAdressCreateManyUserInputObjectSchema),
			z.lazy(() => UserAdressCreateManyUserInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const UserAdressCreateManyUserInputEnvelopeObjectSchema = Schema
