import { client } from 'common/client'
import { Response } from 'common/types'
import { CreateTemplateDto } from 'template/schemas'
import { Template } from 'template/types'
import { Simplify } from 'type-fest'

export type CreateTemplateRequestData = Simplify<
	Omit<CreateTemplateDto, 'specialty'> & {
		specialtyId: string
	}
>

export function createTemplate(
	data: CreateTemplateRequestData,
): Promise<Response<Template>> {
	return client('templates', {
		method: 'post',
		json: data,
	}).json()
}
