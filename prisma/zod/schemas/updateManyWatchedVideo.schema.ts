import { z } from 'zod'
import { WatchedVideoUpdateManyMutationInputObjectSchema } from './objects/WatchedVideoUpdateManyMutationInput.schema'
import { WatchedVideoWhereInputObjectSchema } from './objects/WatchedVideoWhereInput.schema'

export const WatchedVideoUpdateManySchema = z.object({
	data: WatchedVideoUpdateManyMutationInputObjectSchema,
	where: WatchedVideoWhereInputObjectSchema.optional(),
})
