import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import { getYear } from "date-fns";

import api from "../../services";

import Header from "../../components/navBar";

import {
  Container,
  ExportContainer,
  RecordContainer,
  UserContainer,
  UserContainerButton,
  AnamnesisContainer,
  AppointmentContainer,
  Appointment,
} from "./styles";

const Patient = () => {
  const { state } = useLocation();
  const patient = state?.patient;

  const [patientData, setPatientData] = useState({});
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadPatientPronctuary() {
      const { data } = await api.get(`/prontuary/${patient.id}`);

      setPatientData(data.userData);
      setAppointments(data.appointments);
    }

    loadPatientPronctuary();
  }, [patient]);

  const patientAge = useMemo(() => {
    if (patientData?.birthDate) {
      return `- ${
        getYear(new Date()) - patientData?.birthDate?.split("-")[0]
      } Anos`;
    }

    return "";
  }, [patientData?.birthDate]);

  const phoneFormatted = useMemo(() => {
    const regexp = new RegExp(
      /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm
    );

    const formattedPhone = regexp.exec(patientData?.phone);

    if (formattedPhone) {
      return `(${formattedPhone[1]}) ${formattedPhone[2]}-${formattedPhone[3]}`;
    }

    return `Nenhum telefone cadastrado`;
  }, [patientData]);

  const addressFormatted = useMemo(() => {
    if (
      patientData?.streetName &&
      patientData?.houseNumber &&
      patientData?.district &&
      patientData?.city &&
      patientData?.state
    ) {
      return `${patientData?.streetName}, ${patientData?.houseNumber} - ${patientData?.district}, ${patientData?.city}, ${patientData?.state}`;
    }

    return "Nenhum endereço cadastrado";
  }, [patientData]);

  return (
    <Container>
      <Header />

      <ExportContainer>
        <div>
          <UserContainer>
            <UserContainerButton>
              <img
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                alt="Imagem do Usuário"
              />
            </UserContainerButton>
          </UserContainer>

          <h1>{patientData?.name}</h1>
        </div>
        <Button variant="contained">Exportar completo</Button>
      </ExportContainer>

      <RecordContainer>
        <h1>{`${patientData?.name} ${patientData?.lastName} ${patientAge}`}</h1>

        <h3>1,82 - 70kg</h3>
        <h3>Telefone: {phoneFormatted}</h3>
        <h3>{addressFormatted}</h3>

        <h4>Resumo do paciente</h4>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <AnamnesisContainer>
          <h1>Anamnese do paciente</h1>

          <Button>Baixar Anamnese</Button>
        </AnamnesisContainer>

        <AppointmentContainer>
          <div>
            <h1>Consultas</h1>

            <Button>Exportar</Button>
          </div>

          {appointments.map((appointment) => (
            <Appointment key={appointment?.id}>
              <span>
                <h3>Consulta {appointment?.id}</h3>
                <p>{appointment?.date}</p>
              </span>

              <p>
                <b>Evolução: </b>
                {appointment?.description}
              </p>

              {appointment?.exercises?.map((exercise) => (
                <div className="exercise">
                  <span>
                    <h3>Exercício semana 1</h3>
                    <p>23 de dezembro</p>
                  </span>

                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>

                    <Button>Baixar arquivo</Button>
                  </div>
                </div>
              ))}
            </Appointment>
          ))}
        </AppointmentContainer>
      </RecordContainer>
    </Container>
  );
};

export default Patient;
