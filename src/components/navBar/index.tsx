import { MouseEvent, ReactElement, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoImg from '../../assets/logo.png'
import { useAuth } from 'auth/hooks/useAuth'

import { Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

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
  const [screenWidth, setScreenWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate()
  const { user, logout } = useAuth()

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, []);

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
      {screenWidth > 881 ? (
        <>
          <img src={LogoImg} alt="Logo" />

          {user?.type === UserType.DOCTOR ? (
            <div className="navigationContainer">
              <TextNavBar onClick={(): void => navigate('/patients')}>
                Meus Pacientes
              </TextNavBar>
              <TextNavBar onClick={(): void => navigate('/doctors/availability')}>
                Minha Agenda
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
              <TextNavBar onClick={(): void => navigate('/doctors/appointments')}>
                Minhas consultas
              </TextNavBar>
              <TextNavBar onClick={() => navigate('/exercises')}>
                Exercicios
              </TextNavBar>
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
                  <MenuItem onClick={(): void => navigate('/doctors/profile')}>
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
                onClick={(): void => navigate('/sign-up/doctor')}
                className="register"
              >
                Cadastre-se
              </button>
            </ButtonContainer>
          )}
        </>
      ) : (
        <div>
          <MenuIcon style={{ cursor: 'pointer', fontSize: 28, color: '#fff' }} onClick={() => setShowMenu(!showMenu)} />
          {showMenu && user?.type === "DOCTOR" ? (
            <div>
              <TextNavBar style={{ marginBottom: 10 }} onClick={(): void => { navigate('/patients'); setShowMenu(false) }}>
                Meus Pacientes
              </TextNavBar>
              <TextNavBar style={{ marginBottom: 10, marginLeft: 1 }} onClick={(): void => { navigate('/doctors/availability'); setShowMenu(false) }}>
                Minha Agenda
              </TextNavBar>
              <TextNavBar style={{ marginBottom: 10, marginLeft: 1 }} onClick={() => { navigate('/anamnesis'); setShowMenu(false) }}>
                Anamneses
              </TextNavBar>
              <TextNavBar style={{ marginBottom: 10, marginLeft: 1 }} onClick={(): void => { navigate('/evaluations'); setShowMenu(false) }}>
                Avaliações
              </TextNavBar>
              <TextNavBar style={{ marginBottom: 10, marginLeft: 1 }} onClick={(): void => { navigate('/templates'); setShowMenu(false) }}>
                Modelos
              </TextNavBar>
              <TextNavBar style={{ marginBottom: 10, marginLeft: 1 }} onClick={(): void => { navigate('/courses'); setShowMenu(false) }}>
                Cursos
              </TextNavBar>
              <TextNavBar style={{ marginBottom: 10, marginLeft: 1 }} onClick={(): void => { navigate('/doctors/appointments'); setShowMenu(false) }}>
                Minhas consultas
              </TextNavBar>
              <TextNavBar style={{ marginBottom: 10, marginLeft: 1 }} onClick={() => { navigate('/exercises'); setShowMenu(false) }}>
                Exercicios
              </TextNavBar>
            </div>
          ) : (
            <></>
          )}
          {showMenu && user?.type !== "DOCTOR" ? (
            <div className="navigationContainer" />
          ) : (
            <></>
          )}
        </div>
      )}
    </Container>
  )
}
