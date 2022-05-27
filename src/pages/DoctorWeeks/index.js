import React from "react";
import NavBar from "../../components/navBar";
import { FiDownloadCloud, FiVideo, FiHeart, FiShare2 } from "react-icons/fi";

import {
  MainContainer,
  ContentContainer,
  ContentLeft,
  ContentWeeks,
  TitleWeeks,
  DescriptionWeeks,
  ContentCardExercisesWeeks,
  CardExercisesWeeks,
  ContentTitlesWeeks,
  TitleCardExercisesWeeks,
  DescriptionCardExercisesWeeks,
} from "./styles";

export default function DoctorWeeks() {
  return (
    <MainContainer>
      <NavBar />
      <ContentContainer>
        <ContentLeft>
          <ContentWeeks>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TitleWeeks>Semana 1</TitleWeeks>
                <DescriptionWeeks>
                  Veja seus exercícios disponíveis
                </DescriptionWeeks>
              </div>
              <div>
                <FiDownloadCloud color="#000" size={50} />
              </div>
            </div>
          </ContentWeeks>
          <ContentCardExercisesWeeks>
            <CardExercisesWeeks>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "150px",
                }}
              >
                <ContentTitlesWeeks>
                  <TitleCardExercisesWeeks>Exercício 1</TitleCardExercisesWeeks>
                  <DescriptionCardExercisesWeeks>
                    Criador por Ana Barbara
                  </DescriptionCardExercisesWeeks>
                </ContentTitlesWeeks>
                <div>
                  <FiVideo
                    style={{ marginLeft: "30px" }}
                    color="#000"
                    size={30}
                  />
                  <FiHeart
                    style={{ marginLeft: "150px" }}
                    color="#000"
                    size={20}
                  />
                  <FiShare2
                    style={{ marginLeft: "30px" }}
                    color="#000"
                    size={20}
                  />
                </div>
              </div>
            </CardExercisesWeeks>
          </ContentCardExercisesWeeks>
        </ContentLeft>
      </ContentContainer>
    </MainContainer>
  );
}
