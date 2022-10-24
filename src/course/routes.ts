import { CourseCreate } from 'course/pages/CourseCreate'
import { CourseEdit } from 'course/pages/CourseEdit/CourseEdit'
import { CourseList, CourseDetail } from './pages'

export const COURSE_ROUTES = [
	{
		auth: true,
		path: '/courses',
		element: CourseList,
	},
	{
		auth: true,
		path: '/courses/create',
		element: CourseCreate,
	},
	{
		auth: true,
		path: '/courses/:courseId',
		element: CourseDetail,
	},
	{
		auth: true,
		path: '/courses/:courseId/edit',
		element: CourseEdit,
	},
]
