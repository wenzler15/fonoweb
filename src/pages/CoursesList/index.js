import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, LinearProgress } from "@mui/material";

import NavBar from "../../components/navBar";

import {
  Container,
  FilterCoursesContainer,
  CustomButton,
  CourseContainer,
} from "./styles";

const coursesList = [
  {
    id: 1,
    title: "Fonoaudiologia #3 - Exercícios Diários",
    image:
      "https://www.puc-campinas.edu.br/wp-content/uploads/2016/05/foto-curso-fono.jpg",
    currentClassName: "• Casule Saúde e Bem-estar",
    currentClass: 10,
    totalClasses: 20,
    status: 1,
  },
  {
    id: 2,
    title: "Fonoaudiologia #3 - Exercícios Diários",
    image:
      "https://www.puc-campinas.edu.br/wp-content/uploads/2016/05/foto-curso-fono.jpg",
    currentClassName: "• Casule Saúde e Bem-estar",
    currentClass: 10,
    totalClasses: 20,
    status: 2,
  },
];

function CoursesList() {
  const [tabValue, setTabValue] = useState(1);
  const navigate = useNavigate();

  const handleChangeTab = useCallback((value) => setTabValue(value), []);

  const handleNavigateToCoursePage = useCallback(
    (course) => {
      navigate(`/courses/${course.id}`);
    },
    [navigate]
  );

  const inProgressCourses = useMemo(() => {
    const filteredCourses = coursesList.filter((course) => course.status === 1);

    return filteredCourses;
  }, []);

  const completedCourses = useMemo(() => {
    const filteredCourses = coursesList.filter((course) => course.status === 2);

    return filteredCourses;
  }, []);

  const displayedCourses = useMemo(() => {
    const courses = {
      1: coursesList,
      2: inProgressCourses,
      3: completedCourses,
    };

    return courses[tabValue];
  }, [inProgressCourses, completedCourses, tabValue]);

  return (
    <>
      <NavBar />
      <Container>
        <h1>Cursos Disponiveis</h1>
        <h2>Atualizações e capacitação profissional completa</h2>

        <FilterCoursesContainer>
          <CustomButton
            isActive={tabValue === 1}
            onClick={() => handleChangeTab(1)}
          >
            Todos os cursos ({coursesList.length})
          </CustomButton>
          <CustomButton
            isActive={tabValue === 2}
            onClick={() => handleChangeTab(2)}
          >
            Em progresso ({inProgressCourses.length})
          </CustomButton>
          <CustomButton
            isActive={tabValue === 3}
            onClick={() => handleChangeTab(3)}
          >
            Completos ({completedCourses.length})
          </CustomButton>
        </FilterCoursesContainer>

        {displayedCourses.map((course, index) => (
          <CourseContainer key={index}>
            <img src={course.image} alt={course.title} />

            <div>
              <span>
                <h1>{course.title}</h1>
                <p>{`${course.currentClass}. Fonoaudiologia • Casule Saúde e Bem-estar`}</p>
              </span>

              <div>
                <h3>{`${course.currentClass}/${course.totalClasses} Aulas`}</h3>

                <LinearProgress
                  value={(course.currentClass / course.totalClasses) * 100}
                  color="secondary"
                  variant="determinate"
                  className="courseCompletionBar"
                />
              </div>
            </div>

            <Button onClick={() => handleNavigateToCoursePage(course)}>
              Ver curso
            </Button>
          </CourseContainer>
        ))}
      </Container>
    </>
  );
}

export default CoursesList;
