import React from "react";
import ResponsiveAppBar from "../../components/bar";
import { BsCheck2Circle } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentImgCheck,
  ContentMenssageSuccessfully,
  MenssageSuccessfully,
  ContentButton,
  Button,
} from "./styles";

export default function SuccessfullyQuery() {
  // const navigate = useNavigate();
  return (
    <MainContainer>
      <ResponsiveAppBar />
      <ContentContainer>
        <ContentRight>
          <ContentImgCheck>
            <BsCheck2Circle color="#ffffff" size={80} />
          </ContentImgCheck>

          <ContentMenssageSuccessfully>
            <MenssageSuccessfully>
              Consulta agendada com sucesso
            </MenssageSuccessfully>
          </ContentMenssageSuccessfully>
          <ContentButton
          // onClick={() => navigate("/home")}
          >
            <Button>Voltar</Button>
          </ContentButton>
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
