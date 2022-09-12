import { z } from 'zod'
import { UserContactUpdateInputObjectSchema } from './objects/UserContactUpdateInput.schema'
import { UserContactWhereUniqueInputObjectSchema } from './objects/UserContactWhereUniqueInput.schema'

export const UserContactUpdateOneSchema = z.object({
	data: UserContactUpdateInputObjectSchema,
	where: UserContactWhereUniqueInputObjectSchema,
})
