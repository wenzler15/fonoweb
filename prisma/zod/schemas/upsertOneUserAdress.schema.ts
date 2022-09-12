import { z } from 'zod'
import { UserAdressWhereUniqueInputObjectSchema } from './objects/UserAdressWhereUniqueInput.schema'
import { UserAdressCreateInputObjectSchema } from './objects/UserAdressCreateInput.schema'
import { UserAdressUpdateInputObjectSchema } from './objects/UserAdressUpdateInput.schema'

export const UserAdressUpsertSchema = z.object({
	where: UserAdressWhereUniqueInputObjectSchema,
	create: UserAdressCreateInputObjectSchema,
	update: UserAdressUpdateInputObjectSchema,
})
