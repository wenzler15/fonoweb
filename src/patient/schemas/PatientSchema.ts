import { Yup } from 'common/yup'

export const PatientSchema = Yup.object({
	id: Yup.string().required(),
	numericId: Yup.number().required(),
	userId: Yup.string().required(),
	createdAt: Yup.date().required(),
	updatedAt: Yup.date().required(),
	deletedAt: Yup.date().required().nullable(),
})
