import { Yup } from 'common/yup'
import { PatientSchema } from 'patient/schemas'
import { UserType, UserWithPatient } from 'user/types'

export const UserWithPatientSchema: Yup.SchemaOf<UserWithPatient> =
	Yup.object().shape({
		id: Yup.string().required(),
		numericId: Yup.number().required(),
		email: Yup.string().required(),
		name: Yup.string().required(),
		gender: Yup.string().required().nullable(),
		cpf: Yup.string().required(),
		birthDate: Yup.date().required().nullable(),
		password: Yup.string().required(),
		type: Yup.mixed<UserType>().oneOf(Object.values(UserType)).required(),
		avatar: Yup.string().required().nullable(),
		facebookToken: Yup.string().required().nullable(),
		passwordResetToken: Yup.string().required().nullable(),
		passwordResetExpires: Yup.date().required().nullable(),
		isAdmin: Yup.boolean().required(),
		createdAt: Yup.date().required(),
		updatedAt: Yup.date().required(),
		deletedAt: Yup.date().required().nullable(),
		patientData: PatientSchema.nullable(),
	})
