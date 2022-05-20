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
  ContentTextArea,
  TextArea,
  ContentButtonSave,
  ButtonSave,
} from "./styles";

export default function NewAvaliation() {
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
            <TitlePacientes>Nova avaliação</TitlePacientes>
          </ContentPacientes>
          <ContentTextArea>
            <TextArea />
          </ContentTextArea>
          <ContentButtonSave>
            <ButtonSave>Salvar</ButtonSave>
          </ContentButtonSave>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
