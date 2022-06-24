import React from "react";

import TextInput from "../../components/TextInput";
import NavBar from "../../components/navBar";

import { ButtonContainer, Card, CardSelector, Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { Radio, RadioGroup } from "@material-ui/core";

function DoctorProfile() {
  const navigate = useNavigate();

  const userCards = [
    {
      isSelected: true,
      number: "**** **** **** 5353",
      expiration_date: "02/25",
    },
    {
      isSelected: false,
      number: "**** **** **** 6453",
      expiration_date: "07/29",
    },
  ];

  return (
    <>
      <NavBar />

      <Container>
        <div>
          <div className="titleContainer">
            <h1>Dados Pessoais</h1>

            <button onClick={() => {}}>Editar</button>
          </div>

          <span>
            <TextInput
              disabled
              title="Nome Completo"
              placeholder="Nome completo"
            />
            <TextInput
              disabled
              type="email"
              title="Email"
              placeholder="email@exemplo.com"
            />
          </span>

          <span>
            <TextInput disabled title="CPF" placeholder="000.000.000-00" />
            <TextInput
              disabled
              type="file"
              title="Anexar CRFA ou Comprovante da faculdade"
              placeholder="PDF, PNG e JPEG"
            />
          </span>
        </div>

        <div>
          <div className="titleContainer">
            <h1>
              Endereço de atendimento <b>[opcional]</b>
            </h1>

            <button onClick={() => {}}>Editar</button>
          </div>

          <span>
            <TextInput
              disabled
              title="Endereço completo"
              placeholder="rua das avenidas"
            />
            <TextInput disabled title="Número" placeholder="333" />
          </span>

          <span>
            <TextInput disabled title="Bairro" placeholder="bairro" />
            <TextInput
              disabled
              title="Complemento"
              placeholder="Apartamento 23"
            />
          </span>

          <span>
            <TextInput disabled title="CEP:" placeholder="****" />
          </span>
        </div>

        <div>
          <div className="titleContainer">
            <h1>Cobrança</h1>

            <button onClick={() => {}}>Adicionar nova</button>
          </div>

          <div className="CardsContainer">
            {userCards.map((card) => (
              <>
                <CardSelector
                  isSelected={card.isSelected}
                  onClick={() => console.log(card)}
                >
                  <strong>{card.number}</strong>
                </CardSelector>

                {card.isSelected && (
                  <Card>
                    <h3>Credit Card</h3>

                    <strong>{card.number}</strong>

                    <p>
                      Exp
                      <br />
                      {card.expiration_date}
                    </p>
                  </Card>
                )}
              </>
            ))}
          </div>
        </div>

        <ButtonContainer>
          <button onClick={() => {}}>Salvar alterações</button>

          <button className="logoutButton" onClick={() => navigate("/")}>
            Sair da conta
          </button>
        </ButtonContainer>

        <button className="cancelButton" onClick={() => navigate("/")}>
          Cancelar minha assinatura
        </button>
      </Container>
    </>
  );
}

export default DoctorProfile;
