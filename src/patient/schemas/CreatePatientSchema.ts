import { Yup } from 'common/yup'
import { parse } from 'date-fns/fp'

export const CreatePatientSchema = Yup.object({
	name: Yup.string().required(),
	email: Yup.string().email().required(),
	birthDate: Yup.date()
		.transform((value, originalValue) =>
			parse(new Date(), 'dd/MM/yyyy', originalValue),
		)
		.required()
		.typeError('Data de nascimento inválida'),
})
