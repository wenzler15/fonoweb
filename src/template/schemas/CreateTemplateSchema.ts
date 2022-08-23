import { Yup } from 'common/yup'
import { Specialty } from 'specialty'
import { SpecialtySchema } from 'specialty/schemas'
import { Template, TemplateType } from 'template/types'
import { Simplify } from 'type-fest'

export type CreateTemplateDto = Simplify<
	Pick<Template, 'html' | 'title' | 'type'> & {
		specialty: Specialty
	}
>

export const CreateTemplateSchema: Yup.SchemaOf<CreateTemplateDto> =
	Yup.object().shape({
		title: Yup.string().trim().required(),
		html: Yup.string().trim().required(),
		type: Yup.mixed<TemplateType>()
			.oneOf(Object.values(TemplateType))
			.required(),
		specialty: SpecialtySchema,
	})
