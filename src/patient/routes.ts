import { PatientList, PatientChart, PatientCreate } from 'patient/pages'

export const PATIENT_ROUTES = [
	{
		auth: true,
		path: '/patients',
		element: PatientList,
	},
	{
		auth: true,
		path: '/patients/create',
		element: PatientCreate,
	},
	{
		auth: true,
		path: '/patients/:patient',
		element: PatientChart,
	},
]
