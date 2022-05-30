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
  Label,
  Input,
  ContentButton,
  ButtonRegisterPatient,
} from "./styles";

export default function RegisterNewPatient() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const registerPatients = async () => {
    try {
      const toSend = {
        name,
        gender,
        birthDate,
        email,
        userType: "Paciente",
        password: "123456",
        // myDoctor: pegar do local storage,
      };
      const resp = await fetch("http://18.215.217.253:3001/users/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toSend),
      });
      const res = await resp.json();
      console.log(res.message);
      if (res.message === "User created") {
        navigate("/mypatient");
      } else if (res.message === "user already exists") {
        toast.warn("Usuário já cadastrado");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainer>
      {/* <ResponsiveAppBar /> */}
      <ContentContainer>
        <ContentRight>
          <ContentPacientes>
            <TitlePacientes>Adicione novo paciente</TitlePacientes>
          </ContentPacientes>
          <ContentInputs>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Label>Nome completo</Label>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome Completo"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Label>Genero do Paciente Biologico</Label>
              <Input
                onChange={(e) => setGender(e.target.value)}
                placeholder="feminino"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <Label>Data de Nascimento</Label>
              <Input
                onChange={(e) => setBirthDate(e.target.value)}
                type={"date"}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <Label>E-mail de contato</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@gmail.com"
                type={"email"}
              />
            </div>
          </ContentInputs>
          <ContentButton>
            <ButtonRegisterPatient onClick={() => registerPatients()}>
              Cadastrar paceinte
            </ButtonRegisterPatient>
          </ContentButton>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
