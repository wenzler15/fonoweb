import { AuthenticateRequestParams } from 'auth/requests'
import { Yup } from 'common/yup'

export const AuthenticateSchema: Yup.SchemaOf<AuthenticateRequestParams> =
	Yup.object().shape({
		email: Yup.string().trim().email().required(),
		password: Yup.string().trim().required(),
	})
