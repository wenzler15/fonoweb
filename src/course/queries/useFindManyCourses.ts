import { Prisma } from '@prisma/client'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { client } from 'common/client'
import { Course } from 'course/types'

export function useFindManyCourses(
	query: Prisma.CourseFindManyArgs,
): UseQueryResult<{ result: Course[]; count: number }> {
	return useQuery(
		['findManyCourses', query],
		() =>
			client('courses', {
				method: 'POST',
				json: query,
			})
				.json<{ result: Course[]; count: number }>()
				.then(response => ({
					...response,
					result: response.result.map(course => ({
						...course,
						lessons: course.lessons.map(lesson => ({
							...lesson,
							finished: lesson.videos.every(video => video.watched.length > 0),
						})),
					})),
				})),
		{
			keepPreviousData: true,
		},
	)
}
