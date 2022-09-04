import { Yup } from 'common/yup'

const AddressSchema = Yup.object({
	streetName: Yup.string().required(),
	zipCode: Yup.string().required(),
	district: Yup.string().required(),
	state: Yup.string().required(),
	city: Yup.string().required(),
	number: Yup.string().required(),
	complement: Yup.string(),
})

export const SignUpDoctorSchema = Yup.object({
	email: Yup.string().required(),
	name: Yup.string().required(),
	gender: Yup.string().required(),
	password: Yup.string().required(),
	crfa: Yup.mixed<File>().file().fileType('application/pdf').required(),
	passwordConfirmation: Yup.string().oneOf(
		// eslint-disable-next-line unicorn/no-null
		[Yup.ref('password'), ''],
		'Senhas não batem',
	),
	cpf: Yup.string().required(),
	address: AddressSchema,
})
