import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RangePicker } from 'react-styled-calendar';
import { api } from "../../services";

import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentDocuments,
  TitleDocuments,
  ContentFilter,
  ContentSelect,
  Select,
  Option,
  FilterLabel,
  ContentCalendar,
  ContentResult,
  ContentLastQuery,
  ContentPhotoLastQuery,
  PhotoLastQuery,
  NameDoctorLastQuery,
  LastDateQuery,
  ResumeLastQuery,
  ContentResumeLastQuery,
  OpacityResumeLastQuery,
  ButtonResumeLastQuery,
} from "./styles";
import { FloatingWhatsAppButton } from "../../common/components";



function PatientAppointments() {
  const navigate = useNavigate();

  const [getAppointments, setAppointments] = useState({});

  const getPatientAppointments = async () => {
    try {
      let user = JSON.parse(localStorage.getItem('@auth/user'));

      const { data } = await api.get("/appointment/" + user.id);
      let tempAppointList = [];
      data.map(async (ap) => {
        const { data } = await api.get("/users/" + ap.professionalId);
        tempAppointList.push({ appointment: ap, professional: data });
      });
      setAppointments(tempAppointList)
      console.log(getAppointments)
    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    getPatientAppointments();
  }, []);

  return (
    <MainContainer>
      
      <ContentContainer>
        <ContentRight>
          <ContentDocuments>
            <FiArrowLeft color="#1E98D4" size={30} onClick={() => navigate("/patienthome")} style={{ cursor: "pointer" }} />
            <TitleDocuments>Consultas realizadas</TitleDocuments>
          </ContentDocuments>
          <ContentFilter>
            <FilterLabel>Filtar datas</FilterLabel>
            <ContentSelect>
              <Select>
                <Option>5 Dias</Option>
                <Option>15 Dias</Option>
                <Option>25 Dias</Option>
              </Select>
            </ContentSelect>
            <ContentCalendar>
              <section>
                <RangePicker className="range" fromInputLabel="De" toInputLabel="Até" />
              </section>
            </ContentCalendar>
          </ContentFilter>
          <ContentResult>
            Consultas encontradas ({getAppointments.length})
          </ContentResult>

          {getAppointments.length > 0 ? (
            getAppointments.map((ap, i) =>
              <ContentLastQuery key={i}>
                <ContentPhotoLastQuery>
                  <PhotoLastQuery></PhotoLastQuery>
                </ContentPhotoLastQuery>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <NameDoctorLastQuery>{ap.professional.name}</NameDoctorLastQuery>
                  <LastDateQuery>{ap.appointment.date}</LastDateQuery>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <ContentResumeLastQuery>
                    <ResumeLastQuery>
                      {ap.appointment.description}
                    </ResumeLastQuery>
                  </ContentResumeLastQuery>
                </div>{" "}
              </ContentLastQuery>
            )
          ) : (<FilterLabel>Nenhum histórico de consulta</FilterLabel>)}
        </ContentRight>
      </ContentContainer>
      
    </MainContainer>
  );
}

export default PatientAppointments;
