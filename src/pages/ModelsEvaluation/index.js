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
  ConentInput,
  Input,
  ContentEvaluation,
  TitleEvaluation,
  ContainerContentEvaluation,
  DescriptionEvaluation,
  ContentButton,
  ButtonVisualization,
  ButtonUse,
} from "./styles";

export default function ModelsEvaluation() {
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
            <TitlePacientes>Modelos de Avaliações Disponíveis</TitlePacientes>
          </ContentPacientes>

          <ConentInput>
            <Input placeholder="Buscar Modelos de avaliação" />
          </ConentInput>

          <ContentEvaluation>
            <TitleEvaluation>Avaliação AB</TitleEvaluation>
            <ContainerContentEvaluation>
              <DescriptionEvaluation>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </DescriptionEvaluation>
              <ContentButton>
                <ButtonVisualization>Visualizar</ButtonVisualization>
                <ButtonUse>Usar</ButtonUse>
              </ContentButton>
            </ContainerContentEvaluation>
          </ContentEvaluation>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
