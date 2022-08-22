import { Yup } from 'common/yup'
import { Template } from 'template/types'
import { Simplify } from 'type-fest'

export type UpdateTemplateDto = Simplify<
	Pick<Template, 'html' | 'isActive' | 'title'>
>

export const UpdateTemplateSchema: Yup.SchemaOf<Partial<UpdateTemplateDto>> =
	Yup.object().shape({
		title: Yup.string().trim().required(),
		html: Yup.string().trim().required(),
		isActive: Yup.boolean(),
	})
