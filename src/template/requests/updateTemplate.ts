import { client } from 'common/client'
import { Response } from 'common/types'
import { UpdateTemplateDto } from 'template/schemas'
import { Template } from 'template/types'
import { Simplify } from 'type-fest'

export type UpdateTemplateRequestData = Simplify<
	Omit<UpdateTemplateDto, 'specialty'> & {
		specialtyId: string
	}
>

export function updateTemplate({
	id,
	...data
}: Partial<UpdateTemplateRequestData> & { id: string }): Promise<
	Response<Template>
> {
	return client(`templates/${id}`, {
		method: 'patch',
		json: data,
	}).json()
}
