import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import api from "../../services";

import TextInput from "../../components/TextInput";
import NavBar from "../../components/navBar";

import { ButtonContainer, Card, CardSelector, Container } from "./styles";

function DoctorProfile() {
  const { user } = useAuth();
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
              value={user.name}
            />
            <TextInput
              disabled
              type="email"
              title="Email"
              placeholder="email@exemplo.com"
              value={user.email}
            />
          </span>

          <span>
            <TextInput
              disabled
              title="CPF"
              placeholder="000.000.000-00"
              value={user.cpf}
            />
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
              placeholder="Sua rua"
              value={user?.streetName}
            />
            <TextInput
              disabled
              title="Número"
              placeholder="Seu número"
              value={user.houseNumber}
            />
          </span>

          <span>
            <TextInput
              disabled
              title="Bairro"
              placeholder="Seu bairro"
              value={user?.district}
            />
            <TextInput
              disabled
              title="Complemento"
              placeholder="Seu complemento"
              value={user.complement}
            />
          </span>

          <span>
            <TextInput
              disabled
              title="CEP:"
              placeholder="****"
              value={user.zipcode}
            />
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
