import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function CreateWeeks() {
  const [title, setTtile] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const registerExercises = async () => {
    try {
      const toSend = {
        title,
        description,
      };
      const resp = await fetch("http://localhost:3001/groups", {
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
            <TitlePacientes>Adicione uma nova semana</TitlePacientes>
          </ContentPacientes>
          <ContentInputs>
            <InputTitle
              onChange={(e) => setTtile(e.target.value)}
              placeholder="Insira o titulo da semana "
            />

            <InputDescription
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Insira a descrição da semana"
            />
          </ContentInputs>
          <ContentButton>
            <ButtonRegisterPatient onClick={() => registerExercises()}>
              Cadastrar semana
            </ButtonRegisterPatient>
          </ContentButton>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
