import logo from 'assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { UserType } from 'user/types'
import { Container, LinearBackground } from './styles'

function Home() {
	const navigate = useNavigate()
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
