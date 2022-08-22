import { client } from 'common/client'
import { Response } from 'common/types'
import { Template } from 'template/types'

export const fetchTemplateDetail = (id: string): Promise<Response<Template>> =>
	client(`templates/${id}`, {
		method: 'get',
	}).json()
