import { Yup } from 'common/yup'
import { parse } from 'date-fns/fp'

enum Gender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}

export const CreatePatientSchema = Yup.object({
	name: Yup.string().required().trim(),
	socialName: Yup.string().required().trim(),
	email: Yup.string().email().required().trim(),
	gender: Yup.mixed<Gender>()
		.strict()
		.oneOf(Object.values(Gender) as Gender[])
		.defined() as Yup.MixedSchema<Gender>,
	address: Yup.object()
		.shape({
			zipCode: Yup.string().trim().required(),
			streetName: Yup.string().trim().required(),
			district: Yup.string().trim().required(),
			number: Yup.string().trim().required(),
			city: Yup.string().trim().required(),
			state: Yup.string().trim().required(),
		})
		.required(),
	birthDate: Yup.date()
		.transform((_value, originalValue) =>
			parse(new Date(), 'dd/MM/yyyy', originalValue),
		)
		.required()
		.typeError('Data de nascimento inválida'),
})
