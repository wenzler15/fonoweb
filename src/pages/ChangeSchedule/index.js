import React, { useState } from "react";
import Calendar from "react-calendar";
import ResponsiveAppBar from "../../components/bar";
import "../../../node_modules/react-calendar/dist/Calendar.css";
import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentPacientes,
  TitlePacientes,
} from "./styles";

export default function ChangeSchedule() {
  const [value, onChange] = useState(new Date());
  return (
    <MainContainer>
      <ResponsiveAppBar />
      <ContentContainer>
        <ContentRight>
          <ContentPacientes>
            <TitlePacientes>Monte sua agenda</TitlePacientes>
          </ContentPacientes>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Calendar onChange={onChange} value={value} />
          </div>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
