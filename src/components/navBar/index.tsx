import { MouseEvent, ReactElement, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoImg from '../../assets/logo.png'
import { useAuth } from 'auth/hooks/useAuth'

import { Menu, MenuItem } from '@mui/material'

import { UserType } from 'user/types'
import {
	ButtonContainer,
	Container,
	TextNavBar,
	UserContainer,
	UserContainerButton,
} from './styles'

export function NavBar(): ReactElement {
	const [anchorEl, setAnchorEl] = useState<HTMLElement>()
	const [isDrawerVisible, setIsDrawerVisible] = useState(false)

	const navigate = useNavigate()
	const { user, logout } = useAuth()

	const handleSignOut = useCallback(() => {
		logout()
		navigate('/')
	}, [navigate, logout])

	const handleToggleDrawer = useCallback((event: MouseEvent<HTMLElement>) => {
		setIsDrawerVisible(state => !state)
		setAnchorEl(event.currentTarget)
	}, [])

	return (
		<Container>
			<img src={LogoImg} alt="Logo" />

			{user?.type === UserType.DOCTOR ? (
				<div className="navigationContainer">
					<TextNavBar onClick={() => navigate('/schedule')}>
						Minha Agenda
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/patients')}>
						Meus Pacientes
					</TextNavBar>
					<TextNavBar onClick={() => navigate('/anamnesis')}>
						Anamneses
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/evaluations')}>
						Avaliações
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/templates')}>
						Modelos
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/courses')}>
						Cursos
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/')}>Dashboard</TextNavBar>
				</div>
			) : (
				<div className="navigationContainer" />
			)}

			{user ? (
				<UserContainer>
					<UserContainerButton onClick={handleToggleDrawer}>
						{user.type === UserType.PATIENT ? (
							<img
								src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
								alt="avatar"
							/>
						) : (
							<img
								src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
								alt="avatar"
							/>
						)}
					</UserContainerButton>

					<Menu
						anchorEl={anchorEl}
						open={isDrawerVisible}
						onClose={handleToggleDrawer}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						{user.isAdmin && (
							<MenuItem onClick={(): void => navigate('/doctors/list')}>
								Lista de Médicos
							</MenuItem>
						)}
						{user.type === UserType.DOCTOR && (
							<MenuItem onClick={(): void => navigate('/doctorprofile')}>
								Meu Perfil
							</MenuItem>
						)}
						<MenuItem onClick={handleSignOut}>Sair</MenuItem>
					</Menu>
				</UserContainer>
			) : (
				<ButtonContainer>
					<button type="button" onClick={(): void => navigate('/')}>
						Login
					</button>
					<button
						type="button"
						onClick={(): void => navigate('/sign-up/doctor')}
						className="register"
					>
						Cadastre-se
					</button>
				</ButtonContainer>
			)}
		</Container>
	)
}
