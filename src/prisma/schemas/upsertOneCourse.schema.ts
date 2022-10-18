import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './objects/CourseWhereUniqueInput.schema'
import { CourseCreateInputObjectSchema } from './objects/CourseCreateInput.schema'
import { CourseUpdateInputObjectSchema } from './objects/CourseUpdateInput.schema'

export const CourseUpsertSchema = z.object({
	where: CourseWhereUniqueInputObjectSchema,
	create: CourseCreateInputObjectSchema,
	update: CourseUpdateInputObjectSchema,
})
