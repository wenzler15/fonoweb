import { Yup } from 'common/yup'
import { Specialty } from 'specialty'
import { SpecialtySchema } from 'specialty/schemas'
import { Template, TemplateType } from 'template/types'
import { Simplify } from 'type-fest'

export type UpdateTemplateDto = Simplify<
	Pick<Template, 'html' | 'isActive' | 'title' | 'type'> & {
		specialty: Specialty
	}
>

export const UpdateTemplateSchema: Yup.SchemaOf<Partial<UpdateTemplateDto>> =
	Yup.object().shape({
		title: Yup.string().trim(),
		html: Yup.string().trim(),
		isActive: Yup.boolean(),
		type: Yup.mixed<TemplateType>().oneOf(Object.values(TemplateType)),
		specialty: SpecialtySchema.optional(),
	})
