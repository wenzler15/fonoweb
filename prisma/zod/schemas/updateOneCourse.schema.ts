import { z } from 'zod'
import { CourseUpdateInputObjectSchema } from './objects/CourseUpdateInput.schema'
import { CourseWhereUniqueInputObjectSchema } from './objects/CourseWhereUniqueInput.schema'

export const CourseUpdateOneSchema = z.object({
	data: CourseUpdateInputObjectSchema,
	where: CourseWhereUniqueInputObjectSchema,
})
