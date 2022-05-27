import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { useNavigate } from "react-router-dom";
import { FiBook } from "react-icons/fi";

import {
  MainContainer,
  ContentContainer,
  ContentRight,
  ContentTitle,
  Title,
  ButtonAdd,
  SubTitle,
  ContentWeek,
  ContentTitleWeek,
  TitleWeek,
  DescriptionWeek,
  ContentButton,
  Button,
  ButtonToSee,
} from "./styles";

export default function DoctorExercises() {
  const navigate = useNavigate();
  const [getExercises, setGetExercises] = useState("");

  useEffect(() => {
    ExercisesWeeks();
  }, []);

  const ExercisesWeeks = async () => {
    try {
      let resp = await fetch("http://localhost:3001/groups");
      resp = await resp.json();
      setGetExercises(resp);
    } catch (err) {
      console.log("erro", err);
    }
  };
  return (
    <MainContainer>
      <NavBar />
      <ContentContainer>
        <ContentRight>
          <ContentTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Title>Minhas semanas</Title>
              <ButtonAdd onClick={() => navigate("/createweeks")}>
                Adicionar Semana
              </ButtonAdd>
            </div>
          </ContentTitle>
          {getExercises &&
            getExercises.map((item) => (
              <ContentWeek>
                <ContentTitleWeek>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "50px",
                    }}
                  >
                    <div>
                      <FiBook color="#803888" size={50} />
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                      <TitleWeek> {item.title} </TitleWeek>
                      <DescriptionWeek>{item.description}</DescriptionWeek>
                    </div>
                  </div>
                </ContentTitleWeek>
                <ContentButton>
                  <Button onClick={() => navigate("/createexercises")}>
                    Adicionar exercicío
                  </Button>
                  <ButtonToSee onClick={() => navigate("/doctorweeks")}>
                    Ver
                  </ButtonToSee>
                </ContentButton>
              </ContentWeek>
            ))}
        </ContentRight>
      </ContentContainer>
    </MainContainer>
  );
}
