import { useNavigate } from 'react-router-dom'
import logo from 'assets/logo.png'

import {
	MainContainer,
	BgGradient,
	ContainerContent,
	InitialText,
	NormalText,
	LogoFonoweb,
	Wrapper,
	SmallText,
	SmallTextContainerButton,
	ContentTitles,
	ContentErrorLogin,
} from './styles'
import { useAuth } from 'auth/hooks/useAuth'
import { useAuthenticate } from 'auth/mutations'
import { Field, Formik } from 'formik'
import { TextField } from 'formik-mui'
import { AuthenticateRequestParams } from 'auth/requests'
import { AuthenticateSchema } from 'auth/schemas'
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import { useEffect } from 'react'

function Login() {
	const navigate = useNavigate()
	const auth = useAuth()
	const authenticate = useAuthenticate()

	useEffect(() => {
		if (auth.token && auth.user) {
			navigate('/patients')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleFormSubmit = (data: AuthenticateRequestParams) => {
		authenticate
			.mutateAsync(data)
			.then(({ result }) => {
				auth.setUser(result.user)
				auth.setToken(result.token)
				navigate('/patients')
			})
			.catch(error => {
				console.error(error)
			})
	}

	return (
		<MainContainer>
			<BgGradient />

			<ContainerContent>
				<LogoFonoweb src={logo} />
				<ContentTitles>
					<InitialText>Seja bem vindo</InitialText>
					<NormalText>Insira seu email e senha de acesso.</NormalText>
				</ContentTitles>
				<Formik<AuthenticateRequestParams>
					validationSchema={AuthenticateSchema}
					initialValues={{
						email: 'doctor.1@fonoweb.app.br',
						password: 'fonoweb123',
					}}
					onSubmit={handleFormSubmit}
				>
					{({ handleSubmit }) => (
						<Wrapper>
							<Stack spacing={2}>
								<Field
									component={TextField}
									color="white"
									placeholder="Email"
									name="email"
								/>
								<Field
									color="white"
									component={TextField}
									placeholder="Senha"
									name="password"
								/>
								<LoadingButton
									variant="contained"
									size="xlarge"
									loading={authenticate.isLoading}
									onClick={() => handleSubmit()}
								>
									{authenticate.isLoading ? 'Carregando...' : 'Entrar'}
								</LoadingButton>
							</Stack>
							{authenticate.isError && (
								<ContentErrorLogin>
									Usuário ou senha incorretos. Tente novamente!
								</ContentErrorLogin>
							)}
							<SmallTextContainerButton>
								<SmallText>Ainda não tem cadastro?</SmallText>
								<SmallText onClick={() => navigate('/sign-up/doctor')}>
									Faça agora mesmo
								</SmallText>
							</SmallTextContainerButton>
						</Wrapper>
					)}
				</Formik>
			</ContainerContent>
		</MainContainer>
	)
}

export default Login
