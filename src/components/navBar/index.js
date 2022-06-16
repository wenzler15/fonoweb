import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Drawer } from "@material-ui/core";

import {
  Container,
  TextNavBar,
  UserContainer,
  UserContainerButton,
} from "./styles";

export default function NavBar() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const navigate = useNavigate();

  const handleToggleDrawer = useCallback(() => {
    setIsDrawerVisible((state) => !state);
  }, []);

  return (
    <Container>
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
      </div>

      <UserContainer>
        <UserContainerButton onClick={handleToggleDrawer}>
          <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000" />
        </UserContainerButton>

        <Drawer
          anchor="top"
          open={isDrawerVisible}
          onClose={handleToggleDrawer}
        >
          <Button onClick={() => navigate("/mypatient")}>Meu Perfil</Button>
          <Button onClick={() => navigate("/")}>Sair</Button>
        </Drawer>
      </UserContainer>
    </Container>
  );
}
