import { Yup } from 'common/yup'
import { Template } from 'template/types'
import { Simplify } from 'type-fest'

export type CreateTemplateDto = Simplify<Pick<Template, 'html' | 'title'>>

export const CreateTemplateSchema: Yup.SchemaOf<CreateTemplateDto> =
	Yup.object().shape({
		title: Yup.string().trim().required(),
		html: Yup.string().trim().required(),
	})
