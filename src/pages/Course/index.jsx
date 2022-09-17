import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FiArrowDownCircle,
  FiHeart,
  FiPlayCircle,
  FiShare2,
} from "react-icons/fi";

import { NavBar } from "../../components/navBar";
import Accordion from "../../components/Accordion";
import { api } from "../../services";

import {
  Container,
  PlayerContainer,
  ClassesSelectionContainer,
  NoteContainer,
  Button,
} from "./styles";
import { FloatingWhatsAppButton } from "../../common/components";

const Course = () => {
  const { course_id } = useParams();

  const [courseDetails, setCourseDetails] = useState({});
  const [selectedCourse, setSelectedCourse] = useState({});
  const [watched, setWatched] = useState(false);

  const handleWatched = useCallback(() => {
    setWatched((state) => !state);
  }, []);

  const handleChangeClass = useCallback((data) => {
    setSelectedCourse(data);
  }, []);

  useEffect(() => {
    async function loadCourseDetail() {
      const {
        data: { course },
      } = await api.get(`/courses/${course_id}`);

      setCourseDetails(course);
      setSelectedCourse(course?.course);
    }

    loadCourseDetail();
  }, [course_id]);

  return (
    <>
      

      <Container>
        <h1>{courseDetails?.course?.title}</h1>
        <h2>{courseDetails?.course?.title}</h2>

        <div className="classContainer">
          <PlayerContainer>
            <iframe
              width="100%"
              src={selectedCourse?.url || courseDetails?.course?.url}
              frameBorder="0"
              allow="accelerometer; autoplay; picture-in-picture"
              allowFullScreen
              title="Player"
            />

            <span>
              <h1>{selectedCourse?.name || courseDetails?.course?.title}</h1>

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

              {courseDetails?.course?.hasDownload && (
                <button className="downloadMaterial">
                  Baixar Material
                  <FiArrowDownCircle color="#000" />
                </button>
              )}
            </span>
          </PlayerContainer>

          <ClassesSelectionContainer>
            <h1>Aulas do curso</h1>

            {courseDetails?.modules?.map((module) => (
              <Accordion key={module?.id} title={module?.name}>
                {module?.coursesClasses[0]?.map((data) => (
                  <Button key={data.id} onClick={() => handleChangeClass(data)}>
                    <p>
                      <FiPlayCircle />
                      {data?.name}
                    </p>
                    <span>{data?.time}</span>
                  </Button>
                ))}
              </Accordion>
            ))}
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
