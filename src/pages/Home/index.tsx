import logo from 'assets/logo.png'
import { useAuth } from 'auth/hooks/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserType } from 'user/types'
import { Container, LinearBackground } from './styles'

function Home() {
	const navigate = useNavigate()
	const auth = useAuth()

	useEffect(() => {
		if (auth.token && auth.user) {
			navigate('/patients')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container>
			<LinearBackground />
			<section>
				<img src={logo} alt="logo" />

				<strong>Faça seu login e acesse a plataforma</strong>

				<div>
					<button
						type="button"
						onClick={() => navigate(`login?type=${UserType.PATIENT}`)}
					>
						Sou Paciente
					</button>

					<button
						type="button"
						className="professionalButton"
						onClick={() => navigate(`login?type=${UserType.DOCTOR}`)}
					>
						Sou Profissional
					</button>
				</div>
			</section>
		</Container>
	)
}

export default Home
