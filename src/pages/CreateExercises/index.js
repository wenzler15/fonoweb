import React, { useState } from "react";
// import ResponsiveAppBar from "../../components/bar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentPacientes,
  TitlePacientes,
  ContentInputs,
  InputTitle,
  InputDescription,
  InputURL,
  ContentButton,
  ButtonRegisterPatient,
} from "./styles";

export default function CreateExercises() {
  const [title, setTtile] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const registerExercises = async () => {
    try {
      const toSend = {
        title,
        description,
        url,
      };
      const resp = await fetch("http://18.215.217.253:3001/workouts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toSend),
      });
      navigate("/doctorexercises");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainer>
      <ContentContainer>
        <ContentRight>
          <ContentPacientes>
            <TitlePacientes>Adicione exercicíos</TitlePacientes>
          </ContentPacientes>
          <ContentInputs>
            <InputTitle
              onChange={(e) => setTtile(e.target.value)}
              placeholder="Insira o titulo do exericio "
            />

            <InputDescription
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Insira a descrição"
            />

            <InputURL
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Insira a URL"
            />
          </ContentInputs>
          <ContentButton>
            <ButtonRegisterPatient onClick={() => registerExercises()}>
              Cadastrar exercicíos
            </ButtonRegisterPatient>
          </ContentButton>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
