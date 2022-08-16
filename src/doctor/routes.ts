import { DoctorList } from './pages'

export const DOCTOR_ROUTES = [
	{
		auth: true,
		path: '/doctors/list',
		element: DoctorList,
	},
]
