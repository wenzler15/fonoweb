import React, { useState, useEffect } from "react";
// import ResponsiveAppBar from "../../components/bar";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentPacientes,
  TitlePacientes,
  ButtonMySchedule,
  ContentFilterAddPatient,
  Input,
  ButtonAddPatient,
  ContentTablePatient,
  ContentUser,
  User,
  ContentNewAnamneseEvolution,
  AddAnamnese,
  AddEvolution,
  ContentAddAssessment,
  AddAssessment,
  ContentCheckUser,
  CheckUser,
} from "./styles";

function MyPatient() {
  const navigate = useNavigate();
  const [getPatients, setGetPatients] = useState("");

  useEffect(() => {
    getUsersPatients();
  }, []);

  const getUsersPatients = async () => {
    try {
      let resp = await fetch("http://localhost:3001/users/patients");
      resp = await resp.json();
      setGetPatients(resp);
    } catch (err) {
      console.log("erro", err);
    }
  };

  return (
    <MainContainer>
      {/* <ResponsiveAppBar /> */}
      <ContentContainer>
        <ContentRight>
          <ContentPacientes>
            <TitlePacientes>Meus Pacientes</TitlePacientes>
            <ButtonMySchedule onClick={() => navigate("/schedule")}>
              Minha Agenda
            </ButtonMySchedule>
          </ContentPacientes>

          <ContentFilterAddPatient>
            <Input placeholder="Buscar Pacientes" />
            <ButtonAddPatient onClick={() => navigate("/registernewpatient")}>
              Adicionar Pacientes
            </ButtonAddPatient>
          </ContentFilterAddPatient>

          <ContentTablePatient>
            {getPatients &&
              getPatients.map((item) => (
                <>
                  <ContentUser>
                    <BiUserCircle color="#803888" size={60} />
                    <User>
                      {item.name} {item.lastName}
                    </User>
                  </ContentUser>
                  <ContentNewAnamneseEvolution>
                    <AddAnamnese>Novo Anamnese</AddAnamnese>
                    <AddEvolution>Nova Evolução</AddEvolution>
                  </ContentNewAnamneseEvolution>
                  <ContentAddAssessment>
                    <AddAssessment>Adicionar Nova Avaliação</AddAssessment>
                  </ContentAddAssessment>
                  <ContentCheckUser>
                    <CheckUser>Ver</CheckUser>
                  </ContentCheckUser>
                </>
              ))}
          </ContentTablePatient>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}

export default MyPatient;
