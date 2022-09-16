import { Yup } from 'common/yup'

export const UpdateDoctorSchema = Yup.object({
	name: Yup.string().required(),
	email: Yup.string().email().required(),
	cpf: Yup.string().required(),
  addresses: Yup.array().of(Yup.object().shape({
    id: Yup.string(),
    zipCode: Yup.string().ensure().required(),
    streetName: Yup.string().ensure().required(),
    district: Yup.string().ensure().required(),
    number: Yup.string().ensure().required(),
    city: Yup.string().ensure().required(),
    state: Yup.string().ensure().required(),
  }))
    .min(1, 'É necessário preencher o endereço')
    .required()
});


