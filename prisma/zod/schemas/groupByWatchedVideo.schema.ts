import { z } from 'zod'
import { WatchedVideoWhereInputObjectSchema } from './objects/WatchedVideoWhereInput.schema'
import { WatchedVideoOrderByWithAggregationInputObjectSchema } from './objects/WatchedVideoOrderByWithAggregationInput.schema'
import { WatchedVideoScalarWhereWithAggregatesInputObjectSchema } from './objects/WatchedVideoScalarWhereWithAggregatesInput.schema'
import { WatchedVideoScalarFieldEnumSchema } from './enums/WatchedVideoScalarFieldEnum.schema'

export const WatchedVideoGroupBySchema = z.object({
	where: WatchedVideoWhereInputObjectSchema.optional(),
	orderBy: WatchedVideoOrderByWithAggregationInputObjectSchema,
	having: WatchedVideoScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(WatchedVideoScalarFieldEnumSchema),
})
