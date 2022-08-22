import { client } from 'common/client'
import { Response } from 'common/types'
import { UpdateTemplateDto } from 'template/schemas'
import { Template } from 'template/types'

export function updateTemplate({
	id,
	...data
}: Partial<UpdateTemplateDto> & { id: string }): Promise<Response<Template>> {
	return client(`templates/${id}`, {
		method: 'patch',
		json: data,
	}).json()
}
