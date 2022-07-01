import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";

import logo from "../../assets/logo.svg";

import {
  MainContainer,
  BgGradient,
  ContainerContent,
  InitialText,
  NormalText,
  LogoFonoweb,
  Inputs,
  Wrapper,
  SmallText,
  ContainerRedeem,
  TextRedeem,
  ContainerButtonText,
  ContainerButton,
  SmallTextContainerButton,
  ContentTitles,
} from "./styles";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { signIn } = useAuth();

  const loginFunc = async () => {
    const toSend = {
      email,
      password,
    };

    await signIn(toSend);
    navigate("/mypatient");
  };

  return (
    <MainContainer>
      <BgGradient />

      <ContainerContent>
        <LogoFonoweb src={logo} />
        <ContentTitles>
          <InitialText>Seja bem vindo</InitialText>
          <NormalText>Insira seu email e senha de acesso.</NormalText>
        </ContentTitles>
        <Wrapper>
          <Inputs
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Inputs
            placeholder="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ContainerRedeem>
            <TextRedeem>Esqueceu a senha?</TextRedeem>
            <TextRedeem>&nbsp;&nbsp;&nbsp;</TextRedeem>
            <TextRedeem blue>Clique aqui</TextRedeem>
          </ContainerRedeem>
          <ContainerButton onClick={() => loginFunc()} disabled={true}>
            <ContainerButtonText>Entrar</ContainerButtonText>
          </ContainerButton>
          <SmallTextContainerButton>
            <SmallText>Ainda não tem cadastro?</SmallText>
            <SmallText blue onClick={() => navigate("/register")}>
              Faça agora mesmo
            </SmallText>
          </SmallTextContainerButton>
        </Wrapper>
      </ContainerContent>
    </MainContainer>
  );
}

export default Login;
