import { z } from 'zod'
import { CourseWhereInputObjectSchema } from './objects/CourseWhereInput.schema'
import { CourseOrderByWithRelationInputObjectSchema } from './objects/CourseOrderByWithRelationInput.schema'
import { CourseWhereUniqueInputObjectSchema } from './objects/CourseWhereUniqueInput.schema'
import { CourseScalarFieldEnumSchema } from './enums/CourseScalarFieldEnum.schema'

export const CourseFindFirstSchema = z.object({
	where: CourseWhereInputObjectSchema.optional(),
	orderBy: CourseOrderByWithRelationInputObjectSchema.optional(),
	cursor: CourseWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(CourseScalarFieldEnumSchema).optional(),
})
