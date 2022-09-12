import { z } from 'zod'
import { DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema'
import { DoctorOrderByWithAggregationInputObjectSchema } from './objects/DoctorOrderByWithAggregationInput.schema'
import { DoctorScalarWhereWithAggregatesInputObjectSchema } from './objects/DoctorScalarWhereWithAggregatesInput.schema'
import { DoctorScalarFieldEnumSchema } from './enums/DoctorScalarFieldEnum.schema'

export const DoctorGroupBySchema = z.object({
	where: DoctorWhereInputObjectSchema.optional(),
	orderBy: DoctorOrderByWithAggregationInputObjectSchema,
	having: DoctorScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(DoctorScalarFieldEnumSchema),
})
