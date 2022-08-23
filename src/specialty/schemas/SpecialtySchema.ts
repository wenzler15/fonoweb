import { Yup } from 'common/yup'
import { Specialty } from 'specialty/types'

export const SpecialtySchema: Yup.SchemaOf<Specialty> = Yup.object().shape({
	id: Yup.string().required(),
	numericId: Yup.number().required(),
	name: Yup.string().required(),
	isActive: Yup.boolean().required(),
	createdAt: Yup.date().required(),
	updatedAt: Yup.date().required(),
})
