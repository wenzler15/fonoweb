import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
// import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NavBar from "../../components/navBar";
import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentPacientes,
  TitlePacientes,
  ButtonEditSchedule,
  ContainerInput,
  ContentLine,
  ContentPhoto,
  ContentColumn,
  ContentRow,
  ContentName,
  Name,
  ContentDateMonth,
  DateMonth,
  ContentHour,
  Hour,
  ContentDescription,
  Description,
  ContentButton,
  Button,
} from "./styles";

export default function Schedule() {
  const navigate = useNavigate();
  const [getPatientsPerDoctor, setGetPatientsPerDoctor] = useState("");
  // const [value, setValue] = (React.useState < Date) | (null > null);

  useEffect(() => {
    getUsersPatientsPerDoctor();
  }, []);

  let id = localStorage.getItem("userId");

  const getUsersPatientsPerDoctor = async () => {
    try {
      let resp = await fetch(`http://localhost:3001/appointment/doctor/${id}`);
      resp = await resp.json();
      console.log(resp);
      setGetPatientsPerDoctor(resp);
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
            <div>
              <TitlePacientes>Minhas consultas na agenda</TitlePacientes>
            </div>
            <div>
              <ButtonEditSchedule onClick={() => navigate("/changeschedule")}>
                Editar agenda
              </ButtonEditSchedule>
            </div>
          </ContentPacientes>

          {/* <ContainerInput>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </ContainerInput> */}

          {getPatientsPerDoctor &&
            getPatientsPerDoctor.map((item) => (
              <ContentLine>
                <ContentPhoto>
                  <BiUserCircle color="#803888" size={60} />
                </ContentPhoto>
                <ContentColumn>
                  <ContentRow>
                    <ContentName>
                      <Name> {item.userName} </Name>
                    </ContentName>
                    <ContentDateMonth>
                      <DateMonth> {item.date} </DateMonth>
                    </ContentDateMonth>
                    <ContentHour>
                      <Hour> {item.hour}H </Hour>
                    </ContentHour>
                  </ContentRow>
                  <ContentDescription>
                    <Description>{item.description}</Description>
                  </ContentDescription>
                </ContentColumn>
                <ContentButton>
                  <Button>Ver</Button>
                </ContentButton>
              </ContentLine>
            ))}
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
