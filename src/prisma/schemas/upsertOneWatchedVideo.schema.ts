import { z } from 'zod'
import { WatchedVideoWhereUniqueInputObjectSchema } from './objects/WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoCreateInputObjectSchema } from './objects/WatchedVideoCreateInput.schema'
import { WatchedVideoUpdateInputObjectSchema } from './objects/WatchedVideoUpdateInput.schema'

export const WatchedVideoUpsertSchema = z.object({
	where: WatchedVideoWhereUniqueInputObjectSchema,
	create: WatchedVideoCreateInputObjectSchema,
	update: WatchedVideoUpdateInputObjectSchema,
})
