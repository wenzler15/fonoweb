import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

import {
  MainContainer,
  ContainerContent,
  InitialText,
  NormalText,
  LogoFonoweb,
  Inputs,
  SmallText,
  ContainerButtonText,
  ContainerButton,
  SmallTextContainerButton,
  ContentTitles,
} from "./styles";

function Login() {
  const [path, setPath] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // const loginFunc = async () => {
  //   try {
  //     const toSend = {
  //       email,
  //       password,
  //     };

  //     const resp = await fetch("http://18.212.199.176:3001/auth/", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(toSend),
  //     });
  //     const res = await resp.json();
  //     console.log(res.message);
  //     if (res.message === "User Logged") {
  //       localStorage.setItem("userId", res.user.id);
  //       localStorage.setItem("token", res.token);
  //       navigate("/home", {
  //         state: {
  //           path,
  //         },
  //       });
  //     } else if (res.message === "User not found") {
  //       toast.warn("Usuário não encontrado");
  //     } else if (res.message === "Please send the email and the password") {
  //       toast.warn("Favor enviar e-mail e senha");
  //     } else if (res.message === "User or password not found") {
  //       toast.warn("Usuário ou senha incorretos");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   setPath(params.state.path);
  // }, []);

  return (
    <MainContainer>
      <ContainerContent>
        <LogoFonoweb />
        <ContentTitles>
          <InitialText>Seja bem vindo</InitialText>
          <NormalText>Insira seu email e senha de acesso.</NormalText>
        </ContentTitles>
        <Inputs
          placeholder="E-mail"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <Inputs
          placeholder="Senha"
          type="password"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <ContainerButton
        // onClick={() => loginFunc()}
        // disabled={true}
        >
          <ContainerButtonText>Entrar</ContainerButtonText>
        </ContainerButton>
        <SmallTextContainerButton>
          <SmallText>Ainda não tem cadastro?</SmallText>
          <SmallText
            blue
            onClick={() =>
              navigate("/register", {
                state: {
                  path,
                },
              })
            }
          >
            Faça agora mesmo
          </SmallText>
        </SmallTextContainerButton>
      </ContainerContent>
    </MainContainer>
  );
}

export default Login;
