import { z } from 'zod'
import { WatchedVideoWhereInputObjectSchema } from './objects/WatchedVideoWhereInput.schema'

export const WatchedVideoDeleteManySchema = z.object({
	where: WatchedVideoWhereInputObjectSchema.optional(),
})
