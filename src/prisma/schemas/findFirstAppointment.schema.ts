import { z } from 'zod'
import { AppointmentWhereInputObjectSchema } from './objects/AppointmentWhereInput.schema'
import { AppointmentOrderByWithRelationInputObjectSchema } from './objects/AppointmentOrderByWithRelationInput.schema'
import { AppointmentWhereUniqueInputObjectSchema } from './objects/AppointmentWhereUniqueInput.schema'
import { AppointmentScalarFieldEnumSchema } from './enums/AppointmentScalarFieldEnum.schema'

export const AppointmentFindFirstSchema = z.object({
	where: AppointmentWhereInputObjectSchema.optional(),
	orderBy: AppointmentOrderByWithRelationInputObjectSchema.optional(),
	cursor: AppointmentWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(AppointmentScalarFieldEnumSchema).optional(),
})
