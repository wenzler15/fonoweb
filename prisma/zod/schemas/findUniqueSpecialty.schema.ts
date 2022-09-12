import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './objects/SpecialtyWhereUniqueInput.schema'

export const SpecialtyFindUniqueSchema = z.object({
	where: SpecialtyWhereUniqueInputObjectSchema,
})
