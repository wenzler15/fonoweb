import { z } from 'zod'
import { UserContactWhereUniqueInputObjectSchema } from './objects/UserContactWhereUniqueInput.schema'

export const UserContactDeleteOneSchema = z.object({
	where: UserContactWhereUniqueInputObjectSchema,
})
