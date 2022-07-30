import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";

import logo from "../../assets/logo.png";
import { DOCTOR } from "../../constants";

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
  ContentErrorLogin
} from "./styles";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const { userType } = useAuth();

  const navigate = useNavigate();

  const { signIn } = useAuth();

  const loginFunc = async () => {
    const user = await signIn({ email, password });

    user ? setCurrentUser(user) : setCurrentUser('undefined')

    if(localStorage.getItem('@auth/user') !== 'undefined') await signIn()

    if (localStorage.getItem('@auth/user') !== 'undefined') {
      let user = JSON.parse(localStorage.getItem('@auth/user'));
      (user.userType == 1) ? navigate("/patienthome") : navigate("/mypatient");
    }
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
          <ContainerButton onClick={() => loginFunc()} disabled={true}>
            <ContainerButtonText>Entrar</ContainerButtonText>
          </ContainerButton>
          {currentUser == 'undefined' ? (
            <ContentErrorLogin>Usuário ou senha incorretos. Tente novamente!</ContentErrorLogin>
          ) : (false)}
          {userType === DOCTOR ? (
            <SmallTextContainerButton>
              <SmallText>Ainda não tem cadastro?</SmallText>
              <SmallText blue onClick={() => navigate("/register")}>
                Faça agora mesmo
              </SmallText>
            </SmallTextContainerButton>) : (false)}
        </Wrapper>
      </ContainerContent>
    </MainContainer>
  );
}

export default Login;
