import { client } from 'common/client'
import { Response } from 'common/types'
import { TemplateWithSpecialty } from 'template/types'

export const fetchTemplateDetail = (
	id: string,
): Promise<Response<TemplateWithSpecialty>> =>
	client(`templates/${id}`, {
		method: 'get',
	}).json()
