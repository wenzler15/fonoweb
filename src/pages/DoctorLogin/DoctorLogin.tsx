import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'hooks'
import logo from '../../assets/logo.png'
import { DOCTOR } from '../../constants'

import {
	MainContainer,
	BgGradient,
	ContainerContent,
	InitialText,
	NormalText,
	LogoFonoweb,
	Inputs,
	Wrapper,
	SmallText,
	ContainerButtonText,
	ContainerButton,
	SmallTextContainerButton,
	ContentTitles,
	ContentErrorLogin,
} from './styles'

function Login() {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [currentUser, setCurrentUser] = useState('')
	const { signIn, userType, setUser, setUserType } = useAuth()
	const navigate = useNavigate()

	const loginFunc = async () => {
		const user = await signIn({ email, password })

		user ? setCurrentUser(user) : setCurrentUser('undefined')

		if (!localStorage.getItem('@auth/user')) await signIn()

		if (localStorage.getItem('@auth/user')) {
			const user = JSON.parse(localStorage.getItem('@auth/user'))
			setUser(user)
			setUserType(user.userType)
			user.userType === 1 ? navigate('/patienthome') : navigate('/mypatient')
		}
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
				<Wrapper>
					<Inputs
						placeholder="E-mail"
						onChange={e => setEmail(e.target.value)}
					/>
					<Inputs
						placeholder="Senha"
						type="password"
						onChange={e => setPassword(e.target.value)}
					/>
					<ContainerButton onClick={() => loginFunc()} disabled>
						<ContainerButtonText>Entrar</ContainerButtonText>
					</ContainerButton>
					{currentUser == 'undefined' ? (
						<ContentErrorLogin>
							Usuário ou senha incorretos. Tente novamente!
						</ContentErrorLogin>
					) : (
						false
					)}
					{userType === DOCTOR ? (
						<SmallTextContainerButton>
							<SmallText>Ainda não tem cadastro?</SmallText>
							<SmallText blue onClick={() => navigate('/register')}>
								Faça agora mesmo
							</SmallText>
						</SmallTextContainerButton>
					) : (
						false
					)}
				</Wrapper>
			</ContainerContent>
		</MainContainer>
	)
}

export default Login
