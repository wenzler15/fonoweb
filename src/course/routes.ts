import { CourseList, CourseDetail } from './pages'

export const COURSE_ROUTES = [
	{
		auth: true,
		path: '/courses',
		element: CourseList,
	},
	{
		auth: true,
		path: '/courses/:courseId',
		element: CourseDetail,
	},
]
