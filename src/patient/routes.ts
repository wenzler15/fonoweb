import { PatientList } from 'patient/pages'

export const PATIENT_ROUTES = [
	{
		auth: true,
		path: '/patients',
		element: PatientList,
	},
]
