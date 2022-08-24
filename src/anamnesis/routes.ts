import { AnamnesisCreate, AnamnesisList } from 'anamnesis/pages'

export const ANAMNESIS_ROUTES = [
	{
		auth: true,
		path: '/anamnesis',
		element: AnamnesisList,
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
