import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar";
import { useNavigate, useLocation } from "react-router-dom";
import { FiSearch, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import { isEmpty } from "lodash";
import { api } from "../../services";

import {
  MainContainer,
  ContentContainer,
  ContentLeft,
  ContentRight,
  ContentTitle,
  Title,
  SubTitle,
  ContentSelectCity,
  SelectCity,
  IconShearch,
  ContentSelect,
  ContentTextSelect,
  Select,
  Option,
  ContentResultFilter,
  TextResultFilter,
  ContentResult,
  OptionCity,
  Contenthigher,
  ContentPhotoHigher,
  PhotoHigher,
  NameDoctor,
  ButtonContactDoctor,
  ContentResumeHigher,
  Description,
  ConsultationLocation,
  ContentButton,
  Button,
  TitleQuery,
  ContentCard,
  Card,
  ContentDayMonth,
  DayMonth,
  ContentNameDoctorCard,
  NameDoctorCard,
  ConsultationLocationCard,
  TimeCard,
  ContentButtonCard,
  OpacityButtonCard,
  ButtonCard,
  ContentTitleLastQuery,
  TitleLastQuery,
  ArrowRight,
  ContentLastQuery,
  ContentPhotoLastQuery,
  PhotoLastQuery,
  NameDoctorLastQuery,
  LastDateQuery,
  ResumeLastQuery,
  ContentResumeLastQuery,
  ContentResultEmpty
} from "./styles";

function PatientHome() {
  const navigate = useNavigate();

  const [getCityDoctors, setCityDoctors] = useState({});
  const [getDoctors, setDoctors] = useState({});
  const [getSpecialty, setSpecialty] = useState({});
  const [selected, setSelected] = useState(0);
  const [getAppointments, setAppointments] = useState({});
  const [getLastAppointments, setLastAppointments] = useState({});

  const getUsersDoctor = async (id) => {
    try {
      let resDoctor;

      if (id == 0) { resDoctor = await api.get("/professionals"); }
      else { resDoctor = await api.get("/professionals?specialty=" + id); }

      const { data } = resDoctor;
      setDoctors(data);
    } catch (err) { }
  };

  const getSpecialtyDoctor = async () => {
    try {
      const { data } = await api.get("/specialtys");
      setSpecialty(data);
    } catch (err) { }
  };

  const getCityDoctor = async () => {
    try {
      const { data } = await api.get("/users-addresses");
      let tempCityList = [];
      data.map((city) => {
        if (tempCityList.includes(city.city) || city.city == null || city.city == '') { return false }
        else { tempCityList.push(city.city); }
      })
      setCityDoctors(tempCityList);
    } catch (err) { }
  };

  const filterDoctor = async event => {
    setSelected(event.target.value);
    await getUsersDoctor(event.target.value);
  }

  const getPatientAppointments = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('@auth/user'));
      const { data } = await api.get("/appointment/" + user.id);
      const lastAppointment = data.filter((appointment) => appointment.status === "Aguardando").pop()
      if(lastAppointment) {
        const { data } = await api.get("/users/" + lastAppointment.professionalId);
        setLastAppointments({ appointment: lastAppointment, professional: data })
      }
      setAppointments(data)
    } catch (err) {
      console.log(err)
    }
  }

  const changeRedirectPage = (doc) => {
    const resultFilter = getAppointments.filter((appointment) => appointment.status === "Aguardando" && appointment.professionalId === doc.professionalId)
    if(!isEmpty(resultFilter)){
      const [day, month, year] = resultFilter[0].date.split('/');
      const date = new Date(year, month, day);
      navigate(`/patienteditappointment/${doc.id}/${date.getMonth()}/${date.getDate()}/${resultFilter[0].hour}/${resultFilter[0].id}`);
    }else{
      navigate("/patientinfodoctor/" + doc.id);
    }
  }

  useEffect(async () => {
    await Promise.all([
      getUsersDoctor(0),
      getSpecialtyDoctor(),
      getCityDoctor(),
      getPatientAppointments(),
    ])
  }, []);

  return (
    <MainContainer>
      <NavBar />
      <ContentContainer>
        <ContentRight>
          <ContentTitle>
            <Title>Selecione sua cidade</Title>
            <SubTitle>
              Localize o Fonodiologo diponivel na sua cidade ou nas
              proximidades.
            </SubTitle>
          </ContentTitle>
          <ContentSelectCity>
            <SelectCity value={selected}>
              <OptionCity>Busque sua cidade</OptionCity>
              {getCityDoctors.length > 0 ? (
                getCityDoctors?.map((city, index) =>
                  <Option key={index} value={city}>{city}</Option>
                )) : (false)
              }
            </SelectCity>
            <IconShearch>
              <FiSearch color="#D3CECE" size={20} />
            </IconShearch>
          </ContentSelectCity>

          <ContentSelect>
            <ContentTextSelect>Escolha uma especialidade</ContentTextSelect>
            <Select value={selected} onChange={filterDoctor}>
              <Option value='0'>Especialidade</Option>
              {getSpecialty.length > 1 ? (
                getSpecialty?.map((specialty, index) =>
                  <Option key={index} value={specialty.id}>{specialty.name}</Option>
                )) : (false)
              }
            </Select>
          </ContentSelect>

          <ContentResultFilter>
            <TextResultFilter>Resultador de pesquisa ({(getDoctors?.length) ? getDoctors?.length : '0'})</TextResultFilter>
          </ContentResultFilter>
          {getDoctors.length ? (
            getDoctors?.map((doc, index) =>
              <ContentResult key={index}>
                <Contenthigher>
                  <ContentPhotoHigher>
                    <PhotoHigher></PhotoHigher>
                  </ContentPhotoHigher>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
                    <NameDoctor>{doc.name}</NameDoctor>
                    <ButtonContactDoctor onClick={() => changeRedirectPage(doc)}>Contatar</ButtonContactDoctor>
                  </div>
                  <div style={{ marginTop: "5px" }} >
                    <ContentResumeHigher>
                      <Description>{doc.specialty}</Description>
                      <ConsultationLocation>
                        <FiMapPin color="#1E98D4" size={10} style={{ marginRight: 10 }} />{" "}
                        {doc.streetName} - {doc.city}
                      </ConsultationLocation>
                    </ContentResumeHigher>
                  </div>
                </Contenthigher>
              </ContentResult>
            )
          ) : (<ContentResultEmpty>Nenhum doutor encontrado.</ContentResultEmpty>)}
        </ContentRight>

        <ContentLeft>
          <ContentTitle>
            <Title>Minhas consultas</Title>
            <TitleQuery>Consulta em aberto</TitleQuery>
          </ContentTitle>

          <ContentCard>
            {!isEmpty(getLastAppointments) ? (
              <Card key={getLastAppointments.appointment.id}>
                <ContentDayMonth>
                  <DayMonth>{getLastAppointments.appointment.date}</DayMonth>
                </ContentDayMonth>

                <ContentNameDoctorCard>
                  <NameDoctorCard>{getLastAppointments.professional.name}</NameDoctorCard>
                </ContentNameDoctorCard>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ width: "227px" }}>
                    <ConsultationLocationCard>
                      <FiMapPin color="#1E98D4" size={10} style={{ marginRight: 10 }} />{" "}
                      {getLastAppointments.professional.streetName} - {getLastAppointments.professional.city}{" "}
                    </ConsultationLocationCard>

                    <TimeCard>
                      <FiClock color="#fff" size={10} style={{ marginRight: 10 }} />
                      {getLastAppointments.appointment.hour}
                    </TimeCard>
                  </div>
                  <ContentButtonCard>
                    <OpacityButtonCard>
                      <ButtonCard>
                        <FiArrowRight color="#fff" size={30} />
                      </ButtonCard>
                    </OpacityButtonCard>
                  </ContentButtonCard>
                </div>
              </Card>
            ) : (<TitleQuery>Nenhuma consulta em aberto</TitleQuery>)}
          </ContentCard>
          <ContentTitleLastQuery>
            <TitleLastQuery>Ultimas consultas</TitleLastQuery>
            <ArrowRight
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/patientappointments")}
            >
              <FiArrowRight color="#1E98D4" size={30} />
            </ArrowRight>
          </ContentTitleLastQuery>
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
                  <NameDoctorLastQuery>{ap.doctorName}</NameDoctorLastQuery>
                  <LastDateQuery>{ap.date}</LastDateQuery>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <ContentResumeLastQuery>
                    <ResumeLastQuery>
                      {ap.description}
                    </ResumeLastQuery>
                  </ContentResumeLastQuery>
                </div>{" "}
              </ContentLastQuery>
            )
          ) : (<TitleQuery>Nenhum histórico de consulta</TitleQuery>)}

        </ContentLeft>
      </ContentContainer>
    </MainContainer>
  );
}

export default PatientHome;
