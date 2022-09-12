import { z } from 'zod'
import { UserContactWhereUniqueInputObjectSchema } from './objects/UserContactWhereUniqueInput.schema'
import { UserContactCreateInputObjectSchema } from './objects/UserContactCreateInput.schema'
import { UserContactUpdateInputObjectSchema } from './objects/UserContactUpdateInput.schema'

export const UserContactUpsertSchema = z.object({
	where: UserContactWhereUniqueInputObjectSchema,
	create: UserContactCreateInputObjectSchema,
	update: UserContactUpdateInputObjectSchema,
})
