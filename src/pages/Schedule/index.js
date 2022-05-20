import React from "react";
// import ResponsiveAppBar from "../../components/bar";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentPacientes,
  TitlePacientes,
  ButtonEditSchedule,
  ContentMsgFilter,
  MsgFilter,
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

export default function Schedule() {
  const navigate = useNavigate();
  return (
    <MainContainer>
      {/* <ResponsiveAppBar /> */}
      <ContentContainer>
        <ContentRight>
          <ContentPacientes>
            <div>
              <TitlePacientes>Minhas consultas na agenda</TitlePacientes>
            </div>
            <div>
              <ButtonEditSchedule onClick={() => navigate("/changeschedule")}>
                Editar agenda
              </ButtonEditSchedule>
            </div>
          </ContentPacientes>
          <ContentMsgFilter>
            <MsgFilter>Agenda do dia 12 de Novembro á 24 de Dezembro</MsgFilter>
          </ContentMsgFilter>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "30px",
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
                <NamePaciente>Paciente 23</NamePaciente>
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
