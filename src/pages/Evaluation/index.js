import React, { useState } from "react";
// import ResponsiveAppBar from "../../components/bar";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { BsFillPlayFill, BsArrowDownCircle } from "react-icons/bs";
import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentPacientes,
  TitlePacientes,
  ButtonExport,
  SearchForEvaluationModels,
  TextSearchModels,
  ContentSelectSpecialty,
  TextSelectSpecialty,
  SelectSpecialty,
  SelectOption,
  ContentEvaluation,
  TitleEvaluation,
  ContainerContentEvaluation,
  DescriptionEvaluation,
  ContentButtons,
  TextDown,
  TextDelete,
} from "./styles";

export default function Evaluation() {
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
            <TitlePacientes>Avaliações</TitlePacientes>
            <ButtonExport>Exportar</ButtonExport>
          </ContentPacientes>

          <SearchForEvaluationModels>
            <TextSearchModels>
              Buscar modelos de avaliações disponiveis
            </TextSearchModels>
            <BsFillPlayFill color="#803888" size={20} />
          </SearchForEvaluationModels>

          <ContentSelectSpecialty>
            <TextSelectSpecialty>Escolha uma especialidade</TextSelectSpecialty>
            <SelectSpecialty>
              <SelectOption>Especialidade X</SelectOption>
              <SelectOption>Especialidade y</SelectOption>
              <SelectOption>Especialidade z</SelectOption>
            </SelectSpecialty>
          </ContentSelectSpecialty>

          <ContentEvaluation>
            <TitleEvaluation>Avaliação AB</TitleEvaluation>
            <ContainerContentEvaluation>
              <DescriptionEvaluation>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </DescriptionEvaluation>
              <ContentButtons>
                <BsArrowDownCircle color="#1E98D4" size={20} />
                <TextDown>Baixar</TextDown>
                <TextDelete>Excluir</TextDelete>
              </ContentButtons>
            </ContainerContentEvaluation>
          </ContentEvaluation>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
