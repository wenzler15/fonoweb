import { z } from 'zod'
import { WatchedVideoCreateManyUserInputObjectSchema } from './WatchedVideoCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCreateManyUserInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => WatchedVideoCreateManyUserInputObjectSchema),
			z.lazy(() => WatchedVideoCreateManyUserInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const WatchedVideoCreateManyUserInputEnvelopeObjectSchema = Schema
