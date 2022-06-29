import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar";
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
  const [searchPatients, setSearchPatients] = useState("");
  useEffect(() => {
    getUsersPatients();
  }, []);

  const getUsersPatients = async () => {
    try {
      let resp = await fetch("http://18.215.217.253:3001/users/patients");
      resp = await resp.json();
      setGetPatients(resp);
    } catch (err) {
      console.log("erro", err);
    }
  };

  return (
    <MainContainer>
      <NavBar />
      <ContentContainer>
        <ContentRight>
          <ContentPacientes>
            <TitlePacientes>Meus Pacientes</TitlePacientes>
            <ButtonMySchedule onClick={() => navigate("/schedule")}>
              Minha Agenda
            </ButtonMySchedule>
          </ContentPacientes>

          <ContentFilterAddPatient>
            <Input
              placeholder="Buscar Pacientes"
              onChange={(event) => {
                setSearchPatients(event.target.value);
              }}
            />
            <ButtonAddPatient onClick={() => navigate("/registernewpatient")}>
              Adicionar Pacientes
            </ButtonAddPatient>
          </ContentFilterAddPatient>

          <ContentTablePatient>
            {getPatients &&
              getPatients
                .filter((item) => {
                  if (searchPatients == "") {
                    return item;
                  } else if (
                    item.name
                      .toLowerCase()
                      .includes(searchPatients.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => (
                  <>
                    <ContentUser>
                      <BiUserCircle color="#803888" size={60} />
                      <User>
                        {item.name} {item.lastName}
                      </User>
                    </ContentUser>
                    <ContentNewAnamneseEvolution>
                      <AddAnamnese onClick={() => navigate("/newanamnese")}>
                        Novo Anamnese
                      </AddAnamnese>
                      <AddEvolution>Nova Evolução</AddEvolution>
                    </ContentNewAnamneseEvolution>
                    <ContentAddAssessment>
                      <AddAssessment
                        onClick={() =>
                          navigate("/newavaliation", { patient: item })
                        }
                      >
                        Adicionar Nova Avaliação
                      </AddAssessment>
                    </ContentAddAssessment>

                    <ContentCheckUser>
                      <CheckUser
                        onClick={() =>
                          navigate("/patient", { state: { patient: item } })
                        }
                      >
                        Ver
                      </CheckUser>
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
