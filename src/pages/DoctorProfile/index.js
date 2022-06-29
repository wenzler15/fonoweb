import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import api from "../../services";

import NavBar from "../../components/navBar";

import { ButtonContainer, Card, CardSelector, Container } from "./styles";
import { useForm } from "react-hook-form";

const userCards = [
  {
    isSelected: false,
    number: "**** **** **** 5353",
    expiration_date: "02/25",
  },
  {
    isSelected: true,
    number: "**** **** **** 6453",
    expiration_date: "07/29",
  },
];

function DoctorProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const handleToggleIsEditing = () => setIsEditing((state) => !state);

  const handleSubmitUpdate = useCallback((formData) => {
    console.log(formData);
  }, []);

  const handleSignOut = useCallback(async () => {
    await signOut();
    navigate("/");
  }, [navigate, signOut]);

  return (
    <>
      <NavBar />

      <Container>
        <form onSubmit={handleSubmit(handleSubmitUpdate)}>
          <div>
            <div className="titleContainer">
              <h1>Dados Pessoais</h1>

              <button type="button" onClick={handleToggleIsEditing}>
                Editar
              </button>
            </div>

            <span>
              <input
                disabled={isEditing}
                title="Nome Completo"
                placeholder="Nome completo"
                defaultValue={user.name}
                {...register("fullName")}
              />

              <input
                disabled={isEditing}
                title="Email"
                placeholder="email@exemplo.com"
                defaultValue={user.email}
                {...register("email")}
              />
            </span>

            <span>
              <input
                disabled={isEditing}
                title="CPF"
                placeholder="000.000.000-00"
                defaultValue={user.cpf}
                {...register("cpf")}
              />
              <input
                disabled={isEditing}
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

              <button type="button" onClick={handleToggleIsEditing}>
                Editar
              </button>
            </div>

            <span>
              <input
                disabled={isEditing}
                title="Endereço completo"
                placeholder="Sua rua"
                defaultValue={user.streetName}
              />
              <input
                disabled={isEditing}
                title="Número"
                placeholder="Número da casa"
                defaultValue={user.houseNumber}
              />
            </span>

            <span>
              <input
                disabled={isEditing}
                title="Bairro"
                placeholder="Seu bairro"
                defaultValue={user.district}
              />
              <input
                disabled={isEditing}
                title="Complemento"
                placeholder="Seu complemento"
                defaultValue={user.complement}
              />
            </span>

            <span>
              <input
                disabled={isEditing}
                title="CEP:"
                placeholder="Seu CEP"
                className="lastChild"
                defaultValue={user.cep}
              />
            </span>
          </div>

          <div>
            <div className="titleContainer">
              <h1>Cobrança</h1>

              <button type="button" onClick={handleToggleIsEditing}>
                Adicionar nova
              </button>
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
            <button type="submit">Salvar alterações</button>

            <button className="logoutButton" onClick={handleSignOut}>
              Sair da conta
            </button>
          </ButtonContainer>
        </form>

        <button className="cancelButton" onClick={() => navigate("/")}>
          Cancelar minha assinatura
        </button>
      </Container>
    </>
  );
}

export default DoctorProfile;
