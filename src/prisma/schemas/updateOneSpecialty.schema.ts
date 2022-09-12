import { z } from 'zod'
import { SpecialtyUpdateInputObjectSchema } from './objects/SpecialtyUpdateInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './objects/SpecialtyWhereUniqueInput.schema'

export const SpecialtyUpdateOneSchema = z.object({
	data: SpecialtyUpdateInputObjectSchema,
	where: SpecialtyWhereUniqueInputObjectSchema,
})
