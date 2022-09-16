import { DoctorList, DoctorProfile } from './pages'

export const DOCTOR_ROUTES = [
	{
		auth: true,
		path: '/doctors/list',
		element: DoctorList,
	},
  {
		auth: true,
		path: '/doctors/profile',
		element: DoctorProfile,
	},
]
