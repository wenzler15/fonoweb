import { TemplateCreate, TemplateEdit, TemplateList, TemplateAvaliableList } from 'template/pages'

export const TEMPLATE_ROUTES = [
	{
		auth: true,
		path: '/templates',
		element: TemplateList,
	},
	{
		auth: true,
		path: '/templates/create',
		element: TemplateCreate,
	},
	{
		auth: true,
		path: '/templates/:id',
		element: TemplateEdit,
	},
  {
    auth: true,
		path: '/templates/:type/avaliable',
		element: TemplateAvaliableList,
  }
]
