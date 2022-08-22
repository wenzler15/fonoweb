import { client } from 'common/client'
import { Response } from 'common/types'
import { CreateTemplateDto } from 'template/schemas'
import { Template } from 'template/types'

export function createTemplate(
	data: CreateTemplateDto,
): Promise<Response<Template>> {
	return client('templates', {
		method: 'post',
		json: data,
	}).json()
}
