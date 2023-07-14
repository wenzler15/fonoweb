import { z } from 'zod'
import { WatchedVideoCreateManyVideoInputObjectSchema } from './WatchedVideoCreateManyVideoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCreateManyVideoInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => WatchedVideoCreateManyVideoInputObjectSchema),
			z.lazy(() => WatchedVideoCreateManyVideoInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const WatchedVideoCreateManyVideoInputEnvelopeObjectSchema = Schema
