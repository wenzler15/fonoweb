import { PatientList, PatientChart } from 'patient/pages'

export const PATIENT_ROUTES = [
	{
		auth: true,
		path: '/patients',
		element: PatientList,
	},
  {
		auth: true,
		path: '/patients/:id',
		element: PatientChart,
	},
]
