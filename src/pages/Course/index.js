import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FiArrowDownCircle,
  FiHeart,
  FiPlayCircle,
  FiShare2,
} from "react-icons/fi";

import NavBar from "../../components/navBar";
import Accordion from "../../components/Accordion";

import {
  Container,
  PlayerContainer,
  ClassesSelectionContainer,
  NoteContainer,
  Button,
} from "./styles";

const Course = () => {
  const { course_id } = useParams();
  const [watched, setWatched] = useState(false);

  const handleWatched = useCallback(() => {
    setWatched((state) => !state);
  }, []);

  return (
    <>
      <NavBar />

      <Container>
        <h1>Fonoaudiologia #3 - Exercícios Diários</h1>
        <h2>Fonoaudiologia #3 - Exercícios Diários</h2>

        <div className="classContainer">
          <PlayerContainer>
            {/* @TODO - Validar Player */}
            <iframe
              width="100%"
              src={`https://www.youtube.com/embed/rokGy0huYEA`}
              frameBorder="0"
              allow="accelerometer; autoplay; picture-in-picture"
              allowFullScreen
              title="Player"
            />

            <span>
              <h1>Fonoaudiologia #3 - Exercícios Diarios</h1>

              <span>
                <button onClick={handleWatched}>
                  Marcar como assistida
                  <FiHeart color={watched ? "#f00" : "#000"} />
                </button>
                <FiShare2 onClick={() => console.log("share click")} />
              </span>
            </span>

            <span>
              <p>
                Criado por <b>Ana Barbara</b>
              </p>

              <button className="downloadMaterial">
                Baixar Material
                <FiArrowDownCircle color="#000" />
              </button>
            </span>
          </PlayerContainer>

          <ClassesSelectionContainer>
            <h1>Aulas do curso</h1>

            {/* @TODO - Implementar o Backend para apresentar os links das aulas de forma dinâmica */}
            <Accordion title="Introdução">
              <Button>
                <p>
                  <FiPlayCircle />
                  Fonoaudiologia #3 - Exercícios Diários
                </p>
                <span>06:22</span>
              </Button>
            </Accordion>
          </ClassesSelectionContainer>
        </div>

        <NoteContainer>
          <h1>Anote algo aqui...</h1>

          <input placeholder="Escreva aqui..." />
        </NoteContainer>
      </Container>
    </>
  );
};

export default Course;
