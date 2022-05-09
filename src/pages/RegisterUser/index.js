import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import S3 from "react-aws-s3";

import {
  MainContainer,
  InputTitle,
  NormalText,
  Title,
  ContainerInputs,
  ButtonContainer,
  ButtonContainerText,
  ContainerModal,
  TitleModal,
} from "./styles";

function RegisterUser() {
  const [path, setPath] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uf, setUF] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  let params = useLocation();

  const config = {
    bucketName: "fonoweb",
    region: "us-east-1",
    accessKeyId: "AKIASKJGUI6AEVIG7GH4",
    secretAccessKey: "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",
  };

  const ReactS3Client = new S3(config);

  useEffect(() => {
    setPath(params.state.path);
  }, []);

  const register = async () => {
    try {
      const toSend = {
        email,
        password,
        name,
        userType: path === "profissional" ? "Doutor" : "Paciente",
        phone,
        cpf,
        state: uf,
      };

      const resp = await fetch("http://18.212.199.176:3001/users/", {
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
        navigate("/login", {
          state: {
            path,
          },
        });
      } else if (res.message === "User already exists") {
        toast.warn("Usuário já cadastrado");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainer style={{ background: openModal ? "#C9C9C9" : "#FFF" }}>
      <Title>Faça seu cadastro</Title>
      <NormalText>Preencha as informações abaixo</NormalText>
      <ContainerInputs>
        <InputTitle>Nome</InputTitle>
        <InputMask
          onChange={(e) => setName(e.target.value)}
          placeholder="João Pires Alves"
          style={{
            width: "400px",
            border: "1px solid #000",
            borderRadius: "10px",
            height: "40px",
            paddingLeft: "15px",
            background: "none",
            marginTop: "15px",
            marginBottom: "20px",
          }}
        />
        <InputTitle>CPF</InputTitle>
        <InputMask
          onChange={(e) => setCPF(e.target.value)}
          placeholder="000.000.000-00"
          mask="999.999.999-99"
          style={{
            width: "400px",
            border: "1px solid #000",
            borderRadius: "10px",
            height: "40px",
            paddingLeft: "15px",
            background: "none",
            marginTop: "15px",
            marginBottom: "20px",
          }}
        />
        <InputTitle>E-mail</InputTitle>
        <InputMask
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@com"
          style={{
            width: "400px",
            border: "1px solid #000",
            borderRadius: "10px",
            height: "40px",
            paddingLeft: "15px",
            background: "none",
            marginTop: "15px",
            marginBottom: "20px",
          }}
        />
        <InputTitle>Telefone</InputTitle>
        <InputMask
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(11) 11111-1111"
          mask="(99) 99999-9999"
          style={{
            width: "400px",
            border: "1px solid #000",
            borderRadius: "10px",
            height: "40px",
            paddingLeft: "15px",
            background: "none",
            marginTop: "15px",
            marginBottom: "20px",
          }}
        />
        {path === "profissional" ? (
          <>
            <InputTitle>UF</InputTitle>
            <InputMask
              onChange={(e) => setUF(e.target.value)}
              placeholder="SP"
              style={{
                width: "400px",
                border: "1px solid #000",
                borderRadius: "10px",
                height: "40px",
                paddingLeft: "15px",
                background: "none",
                marginTop: "15px",
                marginBottom: "20px",
              }}
            />
          </>
        ) : (
          <></>
        )}
        <InputTitle>Senha</InputTitle>
        <InputMask
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
          style={{
            width: "400px",
            border: "1px solid #000",
            borderRadius: "10px",
            height: "40px",
            paddingLeft: "15px",
            background: "none",
            marginTop: "15px",
            marginBottom: "20px",
          }}
        />
        <ButtonContainer onClick={() => register()}>
          <ButtonContainerText>Cadastrar</ButtonContainerText>
        </ButtonContainer>
      </ContainerInputs>
      {openModal && (
        <ContainerModal>
          <TitleModal>Faça o upload dos seus documentos</TitleModal>
        </ContainerModal>
      )}
    </MainContainer>
  );
}

export default RegisterUser;
