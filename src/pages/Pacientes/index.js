import React from "react";
import ResponsiveAppBar from "../../components/bar";
import { BiUserCircle } from "react-icons/bi";
import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentPacientes,
  TitlePacientes,
  ContentContainerPacientes,
  ContentNamePaciente,
  NamePaciente,
  ContentDateHour,
  Date,
  Hour,
  ContentAboutText,
  AboutText,
  ContentButton,
  Button,
} from "./styles";

export default function Pacientes() {
  return (
    <MainContainer>
      <ResponsiveAppBar />
      <ContentContainer>
        <ContentRight>
          <ContentPacientes>
            <TitlePacientes>Pacientes</TitlePacientes>
          </ContentPacientes>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "80px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "100px",
                margintop: "-50px",
              }}
            >
              <BiUserCircle color="#803888" size={60} />
            </div>
            <ContentContainerPacientes>
              <ContentNamePaciente>
                <NamePaciente>Juscelino Kubitschek</NamePaciente>
                <ContentDateHour>
                  <Date>21 de Dezembro</Date>
                  <Hour>14H</Hour>
                  <ContentButton>
                    <Button>Ver</Button>
                  </ContentButton>
                </ContentDateHour>
              </ContentNamePaciente>
              <ContentAboutText>
                <AboutText>
                  Sobre a consulta medica, resumo de como foi o atendimento do
                  paciente aqui .
                </AboutText>
              </ContentAboutText>
            </ContentContainerPacientes>
          </div>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
