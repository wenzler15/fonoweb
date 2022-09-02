import { Yup } from 'common/yup'
import { Patient } from 'patient/types'

export type CreatePatientDto = {
	name: string;
  natalSex: string;
  birthday: string;
  email?:string;
}

export const PatientSchema: Yup.SchemaOf<Patient> = Yup.object().shape({
	id: Yup.string().required(),
	numericId: Yup.number().required(),
	userId: Yup.string().required(),
	createdAt: Yup.date().required(),
	updatedAt: Yup.date().required(),
	deletedAt: Yup.date().required().nullable(),
})

export const PatientFormSchema = Yup.object().shape({
	name: Yup.string().required(),
  email: Yup.string().email(),
  birthday: Yup.date().required(),
})
