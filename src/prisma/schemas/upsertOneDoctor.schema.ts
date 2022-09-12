import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema'
import { DoctorCreateInputObjectSchema } from './objects/DoctorCreateInput.schema'
import { DoctorUpdateInputObjectSchema } from './objects/DoctorUpdateInput.schema'

export const DoctorUpsertSchema = z.object({
	where: DoctorWhereUniqueInputObjectSchema,
	create: DoctorCreateInputObjectSchema,
	update: DoctorUpdateInputObjectSchema,
})
