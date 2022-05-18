import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import S3 from "react-aws-s3";
import ResponsiveAppBar from "../../components/bar";
import Select from 'react-select'

import { Form, Row, Col, Button, Modal } from 'react-bootstrap';

import {
  MainContainer,
  ContentRegister,
  Title,
  ContentForm,
  ContentButton
} from "./styles";

function RegisterUser() {
  const [path, setPath] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [crfa, setCrfa] = useState("");
  const [cep, setCep] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [show, setShow] = useState(false);
  const [urlPayment, setUrl] = useState("");

  const handleClose = () => setShow(false);

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
        name,
        cpf,
        address,
        crfa,
        cep,
        specialty
      };

      const preference = {
        items: [
          {
            title: 'Assinatura',
            quantity: 1,
            unit_price: 129
          }
        ]
      };

      //navigate('/payment', { state: toSend });
      const resp = await fetch("https://api.mercadopago.com/checkout/preferences?access_token=TEST-839873972326160-051700-d50edb93763bcf54c251226707e01692-146149588", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preference),
      });
      const res = await resp.json();
      setUrl(res.sandbox_init_point);
      setShow(true)

    } catch (err) {
      console.log(err);
    }
    /*try {
      
      const toSend = {
        email,
        name,
        cpf,
        address,
        crfa,
        cep,
        specialty
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
    }*/
  };


  return (
    <MainContainer style={{ background: "#E5E5E5" }}>
      <ContentRegister>
        <Title>Faça seu cadastro</Title>
        <ContentForm>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label style={{ fontWeight: "bold", color: "#1E3354" }}>Nome completo</Form.Label>
                <Form.Control placeholder="Ex.: João da Silva" onChange={(e) => setName(e.target.value)} />
                <Form.Control hidden value={urlPayment} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{ fontWeight: "bold", color: "#1E3354" }}>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Ex.: email@email.com" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCpf">
                <Form.Label style={{ fontWeight: "bold", color: "#1E3354" }}>CPF</Form.Label>
                <Form.Control placeholder="Ex.: 000.000.000-00" as={InputMask} mask='999.999.999-99' onChange={(e) => setCPF(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label style={{ fontWeight: "bold", color: "#1E3354" }}>Endereço completo</Form.Label>
                <Form.Control
                  placeholder="Ex.: Avenida Brasil, 23 - São Paulo - SP"
                  onChange={(e) => setAddress(e.target.value)} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCrfa">
                <Form.Label style={{ fontWeight: "bold", color: "#1E3354" }}>Anexar CRFA ou Comprovante da faculdade</Form.Label>
                <Form.Control type="file" placeholder=".pdf, .jpeg, .png" onChange={(e) => setCrfa(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCep">
                <Form.Label style={{ fontWeight: "bold", color: "#1E3354" }}>CEP</Form.Label>
                <Form.Control placeholder="Ex.: 00000-000" as={InputMask} mask='99999-999' onChange={(e) => setCep(e.target.value)} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEspecialidade">
                <Form.Label style={{ fontWeight: "bold", color: "#1E3354" }}>Especialidade</Form.Label>
                <Form.Select defaultValue="Especialidade" onChange={(e) => setSpecialty(e.target.value)}>
                  <option value="Especialidade"> Especialidade </option>
                  <option value="Audiologia"> Audiologia </option>
                  <option value="Linguagem"> Linguagem </option>
                  <option value="Motricidade Orofacial"> Motricidade Orofacial </option>
                  <option value="Saúde Coletiva"> Saúde Coletiva </option>
                  <option value="Voz"> Voz </option>
                  <option value="Disfagia"> Disfagia </option>
                  <option value="Fonoaudiologia Educacional"> Fonoaudiologia Educacional </option>
                  <option value="Gerontologia"> Gerontologia </option>
                  <option value="Fonoaudiologia Neurofuncional"> Fonoaudiologia Neurofuncional </option>
                  <option value="Fonoaudiologia do Trabalho"> Fonoaudiologia do Trabalho </option>
                  <option value="Neuropsicologia"> Neuropsicologia </option>
                  <option value="Fluência"> Fluência </option>
                  <option value="Perícia Fonoaudiológica"> Perícia Fonoaudiológica </option>
                  <option value="Fonoaudiologia Hospitalar"> Fonoaudiologia Hospitalar </option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <ContentButton>
                  <Button onClick={register}
                    style={{
                      width: "300px",
                      borderRadius: "30px",
                      backgroundColor: "#1E98D4",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer"
                    }}>
                    Ir para pagamento
                  </Button>
                </ContentButton>
              </Form.Group>
            </Row>
          </Form>
        </ContentForm>
      </ContentRegister>
      <Modal show={show} onHide={handleClose} size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>Escolha a forma de pagamento</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "75vh" }}>
          <iframe src={urlPayment} style={{ width: "100%", height: "100%" }}></iframe>
        </Modal.Body>
      </Modal>
    </MainContainer>
  );
}

export default RegisterUser;
