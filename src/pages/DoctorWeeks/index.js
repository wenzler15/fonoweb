import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar";
import Iframe from "react-iframe";

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
  const [getExercisesId, setGetExercisesId] = useState("");
  let location = useLocation();

  useEffect(() => {
    getExercises();
  }, []);
  const getExercises = async () => {
    try {
      let resp = await fetch(
        `http://18.215.217.253:3001/workouts/${location.state.id}`
      );
      resp = await resp.json();
      console.log("testando");
      setGetExercisesId(resp);
    } catch (err) {
      console.log("erro", err);
    }
  };

  return (
    <MainContainer>
      <NavBar />
      <ContentContainer>
        <ContentLeft>
          {getExercisesId &&
            getExercisesId.map((item) => (
              <div>
                <ContentWeeks>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <TitleWeeks> {item.title} </TitleWeeks>
                      <DescriptionWeeks>{item.description}</DescriptionWeeks>
                    </div>
                    <div>
                      <FiDownloadCloud color="#000" size={50} />
                    </div>
                  </div>
                </ContentWeeks>
                <ContentCardExercisesWeeks>
                  <CardExercisesWeeks>
                    <Iframe url={item.url} width="473px" height="207px" />
                  </CardExercisesWeeks>
                </ContentCardExercisesWeeks>
              </div>
            ))}
        </ContentLeft>
      </ContentContainer>
    </MainContainer>
  );
}
