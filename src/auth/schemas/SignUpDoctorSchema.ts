import { Specialty } from '@prisma/client'
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
	password: Yup.string().required(),
	crfa: Yup.mixed<File>().file().fileType('application/pdf').required(),
	passwordConfirmation: Yup.string().oneOf(
		// eslint-disable-next-line unicorn/no-null
		[Yup.ref('password'), ''],
		'Senhas não batem',
	),
	cpf: Yup.string().required(),
	address: AddressSchema,
	specialty: Yup.object().required().typeError('Selecione uma especialidade'),
}) as Yup.ObjectSchema<{
	email: string
	name: string
	password: string
	crfa: File
	passwordConfirmation: string | undefined
	cpf: string
	address: {
		complement?: string | undefined
		number: string
		streetName: string
		zipCode: string
		district: string
		state: string
		city: string
		neighborhood: string
	}
	specialty: Specialty
}>
