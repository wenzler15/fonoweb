import { AnamnesisCreate } from 'anamnesis/pages'

export const ANAMNESIS_ROUTES = [
	{
		auth: true,
		path: '/anamnesis',
		element: null,
	},
	{
		auth: true,
		path: '/anamnesis/create',
		element: AnamnesisCreate,
	},
	{
		auth: true,
		path: '/anamnesis/:id',
		element: null,
	},
]
