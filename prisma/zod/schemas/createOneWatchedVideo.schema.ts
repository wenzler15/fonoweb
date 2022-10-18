import { z } from 'zod'
import { WatchedVideoCreateInputObjectSchema } from './objects/WatchedVideoCreateInput.schema'

export const WatchedVideoCreateOneSchema = z.object({
	data: WatchedVideoCreateInputObjectSchema,
})
