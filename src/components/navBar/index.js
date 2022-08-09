import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

import LogoImg from "../../assets/logo.png";
import { useAuth } from "../../hooks/auth";

import { Button, Menu, MenuItem } from "@material-ui/core";

import {
  Container,
  TextNavBar,
  UserContainer,
  UserContainerButton,
  ButtonContainer,
} from "./styles";
import { DOCTOR } from "../../constants";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const navigate = useNavigate();
  const { user, userType, signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
    navigate("/");
  }, [navigate, signOut]);

  const handleToggleDrawer = useCallback((event) => {
    setIsDrawerVisible((state) => !state);
    setAnchorEl(event.currentTarget);
  }, []);

  return (
    <Container>
      <img src={LogoImg} alt="Logo" />

      {user.userType === 2 ? (
        <div className="navigationContainer">
          <TextNavBar onClick={() => navigate("/mypatient")}>Home</TextNavBar>
          <TextNavBar onClick={() => navigate("/dashboard")}>
            Dashboard
          </TextNavBar>
          <TextNavBar onClick={() => navigate("/mypatient")}>
            Meus Pacientes
          </TextNavBar>
          <TextNavBar onClick={() => navigate("/courses")}>Cursos</TextNavBar>
          <TextNavBar onClick={() => navigate("/support")}>Suporte</TextNavBar>
          <TextNavBar onClick={() => navigate("/evaluationlist")}>Avaliações</TextNavBar>
        </div>
      ) : (
        <div className="navigationContainer">
          <TextNavBar onClick={() => navigate("/patienthome")}>Home</TextNavBar>
          <TextNavBar onClick={() => navigate("/patientexercises")}>Exercícios</TextNavBar>
          <TextNavBar onClick={() => navigate("/patientdocuments")}>Documentos</TextNavBar>
          <TextNavBar onClick={() => navigate("/patientanamnese")}>Minhas Anamneses</TextNavBar>
        </div>
      )}

      {!isEmpty(user) ? (
        <UserContainer>
          <UserContainerButton onClick={handleToggleDrawer}>
            {user.userType === 2 ? (
              <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000" />
            ) : (<img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" />)}
          </UserContainerButton>

          <Menu
            anchorEl={anchorEl}
            open={isDrawerVisible}
            onClose={handleToggleDrawer}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              {userType === DOCTOR ? (
                <Button onClick={() => navigate("/doctorprofile")}>
                  Meu Perfil
                </Button>
              ) : (false)}
            </MenuItem>
            <MenuItem>
              <Button onClick={handleSignOut}>Sair</Button>
            </MenuItem>
          </Menu>
        </UserContainer>
      ) : (
        <ButtonContainer>
          <button onClick={() => navigate("/login")}>Login</button>

          <button onClick={() => navigate("/register")} className="register">
            Cadastre-se
          </button>
        </ButtonContainer>
      )}
    </Container>
  );
}
