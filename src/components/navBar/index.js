import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerNavBar, TextNavBar } from "./styles";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerNavBar>
        <TextNavBar onClick={() => navigate("/mypatient")}>Home</TextNavBar>
        <TextNavBar onClick={() => navigate("/schedule")}>
          Minha Agenda
        </TextNavBar>
        <TextNavBar onClick={() => navigate("/doctorexercises")}>
          Exercicios
        </TextNavBar>
      </ContainerNavBar>
    </Container>
  );
}
