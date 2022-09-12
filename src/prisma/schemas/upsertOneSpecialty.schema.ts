import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './objects/SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateInputObjectSchema } from './objects/SpecialtyCreateInput.schema'
import { SpecialtyUpdateInputObjectSchema } from './objects/SpecialtyUpdateInput.schema'

export const SpecialtyUpsertSchema = z.object({
	where: SpecialtyWhereUniqueInputObjectSchema,
	create: SpecialtyCreateInputObjectSchema,
	update: SpecialtyUpdateInputObjectSchema,
})
