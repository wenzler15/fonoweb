import { Yup } from 'common/yup'

export const UpdateDoctorSchema = Yup.object({
	name: Yup.string().required(),
	email: Yup.string().email().required(),
	cpf: Yup.string().required(),
	zipCode: Yup.string().required(),
	streetName: Yup.string().required(),
	district: Yup.string().required(),
	number: Yup.string().required(),
	city: Yup.string().required(),
	state: Yup.string().required(),
  workZipCode: Yup.string(),
	workStreetName: Yup.string(),
	workDistrict: Yup.string(),
	workNumber: Yup.string(),
	workCity: Yup.string(),
	workState: Yup.string(),
})
