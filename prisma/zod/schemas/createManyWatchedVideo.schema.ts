import { z } from 'zod'
import { WatchedVideoCreateManyInputObjectSchema } from './objects/WatchedVideoCreateManyInput.schema'

export const WatchedVideoCreateManySchema = z.object({
	data: WatchedVideoCreateManyInputObjectSchema,
})
