import React from 'react'

import logo from '../../assets/logo.png'
import { PACIENT, DOCTOR } from '../../constants'
import { useAuth } from '../../hooks'
import { Container, LinearBackground } from './styles'

function Home() {
	const { setUserType } = useAuth()

	const handleSetUserTypePacient = () => setUserType(PACIENT)
	const handleSetUserTypeDoctor = () => setUserType(DOCTOR)

	return (
		<Container>
			<LinearBackground />
			<section>
				<img src={logo} alt="logo" />

				<strong>Faça seu login e acesse a plataforma</strong>

				<div>
					<button type="button" onClick={handleSetUserTypePacient}>
						Sou Paciente
					</button>

					<button
						type="button"
						className="professionalButton"
						onClick={handleSetUserTypeDoctor}
					>
						Sou Profissional
					</button>
				</div>
			</section>
		</Container>
	)
}

export default Home
