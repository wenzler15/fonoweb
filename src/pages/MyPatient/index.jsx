import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/navBar";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

import {
  MainContainer,
  ButtonMySchedule,
  Input,
  ButtonAddPatient,
  ContentUser,
  User,
  ContentNewAnamneseEvolution,
  AddAnamnese,
  AddEvolution,
  ContentAddAssessment,
  AddAssessment,
  ContentCheckUser,
  CheckUser,
  Content,
  PatientData,
} from "./styles";
import { isEmpty } from "lodash";
import { useMemo } from "react";
import AddNewPatient from "../../components/PatientPage/AddNewPatient";
import { FloatingWhatsAppButton } from "../../common/components";

const PatientList = () => {
  const navigate = useNavigate();

  const [getPatients, setGetPatients] = useState("");
  const [searchPatients, setSearchPatients] = useState("");
  const [isRegisterNewPatient, setIsRegisterNewPatient] = useState(false);

  const getUsersPatients = async () => {
    const user = JSON.parse(localStorage.getItem("@auth/user"));
    try {
      const { data } = await api.get(`/users/doctor/${user.id}/patients`);
      setGetPatients(data);
    } catch (err) {
      console.log(err)
    }
  };

  const handleToggleIsRegisteringNewPatient = () =>
    setIsRegisterNewPatient((state) => !state);

  useEffect(async () => {
    await getUsersPatients();
  }, []);

  const patientList = useMemo(() => {
    if (!isEmpty(getPatients) && searchPatients) {
      return getPatients?.filter((item) => {
        item.name.toLowerCase().includes(searchPatients.toLowerCase());

        return item;
      });
    }

    return getPatients;
  }, [getPatients, searchPatients]);

  return (
    <MainContainer>
      <NavBar />

      <Content>
        {isRegisterNewPatient ? (
          <AddNewPatient
            toggleNewPatient={handleToggleIsRegisteringNewPatient}
          />
        ) : (
          <>
            <div>
              <h1>Meus Pacientes</h1>

              <ButtonMySchedule onClick={() => navigate("/schedule")}>
                Minha Agenda
              </ButtonMySchedule>
            </div>

            <div>
              <Input
                placeholder="Buscar Pacientes"
                onChange={(event) => {
                  setSearchPatients(event.target.value);
                }}
              />

              <ButtonAddPatient onClick={handleToggleIsRegisteringNewPatient}>
                Adicionar Pacientes
              </ButtonAddPatient>
            </div>

            {!isEmpty(patientList) ? (
              <div className="patientList">
                {patientList.map((item, index) => (
                  <PatientData key={index}>
                    <ContentUser>
                      <BiUserCircle color="#803888" size={60} />
                      <User>
                        {item.name} {item.lastName}
                      </User>
                    </ContentUser>

                    <ContentNewAnamneseEvolution>
                      <AddAnamnese
                        onClick={() =>
                          navigate("/anamnesis", { state: { patient: item } })
                        }
                      >
                        Novo Anamnese
                      </AddAnamnese>

                      <AddAssessment
                        onClick={() =>
                          navigate("/evaluationnew", { state: { patient: item } })
                        }
                      >
                        Adicionar Nova Avaliação
                      </AddAssessment>

                      <CheckUser
                        onClick={() =>
                          navigate("/patient", { state: { patient: item } })
                        }
                      >
                        Ver
                      </CheckUser>
                    </ContentNewAnamneseEvolution>
                  </PatientData>
                ))}
              </div>
            ) : (
              <strong>
                Você não tem pacientes cadastrados!
                <br />
                Clique{" "}
                <button
                  type="button"
                  onClick={handleToggleIsRegisteringNewPatient}
                >
                  aqui
                </button>{" "}
                e adicione um novo!
              </strong>
            )}
          </>
        )}
      </Content>
      
    </MainContainer>
  );
};

export default PatientList;
