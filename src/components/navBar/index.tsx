import { MouseEvent, ReactElement, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoImg from '../../assets/logo.png'
import { useAuth } from 'hooks'

import { Button, Menu, MenuItem } from '@mui/material'

import { UserRole, UserType } from 'user/types'
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
	const { user, userType, signOut } = useAuth()

	const handleSignOut = useCallback(() => {
		void signOut()
		navigate('/')
	}, [navigate, signOut])

	const handleToggleDrawer = useCallback((event: MouseEvent<HTMLElement>) => {
		setIsDrawerVisible(state => !state)
		setAnchorEl(event.currentTarget)
	}, [])

	return (
		<Container>
			<img src={LogoImg} alt="Logo" />

			{user?.userType === 2 ? (
				<div className="navigationContainer">
					<TextNavBar onClick={(): void => navigate('/mypatient')}>
						Home
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/dashboard')}>
						Dashboard
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/mypatient')}>
						Meus Pacientes
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/courses')}>
						Cursos
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/support')}>
						Suporte
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/evaluationlist')}>
						Avaliações
					</TextNavBar>
				</div>
			) : (
				<div className="navigationContainer">
					<TextNavBar onClick={(): void => navigate('/patienthome')}>
						Home
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/patientexercises')}>
						Exercícios
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/patientdocuments')}>
						Documentos
					</TextNavBar>
					<TextNavBar onClick={(): void => navigate('/patientanamnese')}>
						Minhas Anamneses
					</TextNavBar>
				</div>
			)}

			{user ? (
				<UserContainer>
					<UserContainerButton onClick={handleToggleDrawer}>
						{user.userType === UserType.PATIENT ? (
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
						{user.role === UserRole.ADMIN && (
							<MenuItem onClick={(): void => navigate('/doctors/list')}>
								Lista de Médicos
							</MenuItem>
						)}
						{userType === UserType.DOCTOR && (
							<MenuItem onClick={(): void => navigate('/doctorprofile')}>
								Meu Perfil
							</MenuItem>
						)}
						<MenuItem onClick={handleSignOut}>Sair</MenuItem>
					</Menu>
				</UserContainer>
			) : (
				<ButtonContainer>
					<button type="button" onClick={(): void => navigate('/login')}>
						Login
					</button>
					<button
						type="button"
						onClick={(): void => navigate('/register')}
						className="register"
					>
						Cadastre-se
					</button>
				</ButtonContainer>
			)}
		</Container>
	)
}
