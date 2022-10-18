import { z } from 'zod'
import { WatchedVideoWhereInputObjectSchema } from './objects/WatchedVideoWhereInput.schema'
import { WatchedVideoOrderByWithRelationInputObjectSchema } from './objects/WatchedVideoOrderByWithRelationInput.schema'
import { WatchedVideoWhereUniqueInputObjectSchema } from './objects/WatchedVideoWhereUniqueInput.schema'

export const WatchedVideoAggregateSchema = z.object({
	where: WatchedVideoWhereInputObjectSchema.optional(),
	orderBy: WatchedVideoOrderByWithRelationInputObjectSchema.optional(),
	cursor: WatchedVideoWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
