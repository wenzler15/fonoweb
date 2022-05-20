import React, { useState } from "react";
// import ResponsiveAppBar from "../../components/bar";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentPacientes,
  TitlePacientes,
  ButtonAddQuestion,
  ContentSelectSpecialty,
  TextSelectSpecialty,
  SelectSpecialty,
  SelectOption,
  ContentDefaultModel,
  DefaultModel,
  TitleDefaultModel,
  TextDefaultModel,
  DescriptionDefaultModal,
  ContentButtons,
  ButtonVisualization,
  ButtonEdit,
  ButtonUse,
} from "./styles";

export default function ToViewAnamnese() {
  //   const [name, setName] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [birthDate, setBirthDate] = useState("");
  //   const [email, setEmail] = useState("");

  //   const navigate = useNavigate();

  //   const registerPatients = async () => {
  //     try {
  //       const toSend = {
  //         name,
  //         gender,
  //         birthDate,
  //         email,
  //         userType: "Paciente",
  //         password: "123456",
  //         // myDoctor: pegar do local storage,
  //       };
  //       const resp = await fetch("http://localhost:3001/users/", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(toSend),
  //       });
  //       const res = await resp.json();
  //       console.log(res.message);
  //       if (res.message === "User created") {
  //         navigate("/mypatient");
  //       } else if (res.message === "user already exists") {
  //         toast.warn("Usuário já cadastrado");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <MainContainer>
      {/* <ResponsiveAppBar /> */}
      <ContentContainer>
        <ContentRight>
          <ContentPacientes>
            <TitlePacientes>Anamnese do Paciente</TitlePacientes>
            <ButtonAddQuestion>Criar um nova Anamnese</ButtonAddQuestion>
          </ContentPacientes>

          <ContentSelectSpecialty>
            <TextSelectSpecialty>Escolha uma especialidade</TextSelectSpecialty>
            <SelectSpecialty>
              <SelectOption>Especialidade X</SelectOption>
              <SelectOption>Especialidade y</SelectOption>
              <SelectOption>Especialidade z</SelectOption>
            </SelectSpecialty>
          </ContentSelectSpecialty>

          <ContentDefaultModel>
            <DefaultModel>
              <TitleDefaultModel>Modelo predefinido 1 </TitleDefaultModel>
              <TextDefaultModel>Especialidade X</TextDefaultModel>
            </DefaultModel>
            <DescriptionDefaultModal>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </DescriptionDefaultModal>
            <ContentButtons>
              <ButtonVisualization>Vizualizar</ButtonVisualization>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonUse>Usar</ButtonUse>
            </ContentButtons>
          </ContentDefaultModel>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
