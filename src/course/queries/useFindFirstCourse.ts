import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { client } from 'common/client'
import { Course } from 'course/types'
import { CourseFindFirstSchema } from 'prisma/schemas/findFirstCourse.schema'
import { z } from 'zod'

export function useFindFirstCourse(
	query: z.infer<typeof CourseFindFirstSchema>,
): UseQueryResult<Course> {
	return useQuery(['findFirstCourse', query], () =>
		client('courses/one', {
			method: 'POST',
			json: query,
		})
			.json<{ result: Course }>()
			.then(r => r.result),
	)
}
