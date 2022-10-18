import { z } from 'zod'
import { WatchedVideoScalarWhereInputObjectSchema } from './WatchedVideoScalarWhereInput.schema'
import { WatchedVideoUpdateManyMutationInputObjectSchema } from './WatchedVideoUpdateManyMutationInput.schema'
import { WatchedVideoUncheckedUpdateManyWithoutWatchedInputObjectSchema } from './WatchedVideoUncheckedUpdateManyWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoUpdateManyWithWhereWithoutVideoInput> =
	z
		.object({
			where: z.lazy(() => WatchedVideoScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => WatchedVideoUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => WatchedVideoUncheckedUpdateManyWithoutWatchedInputObjectSchema,
				),
			]),
		})
		.strict()

export const WatchedVideoUpdateManyWithWhereWithoutVideoInputObjectSchema =
	Schema
