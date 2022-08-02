import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiBook, FiHeart, FiShare2 } from "react-icons/fi";
import { BsCollectionPlayFill, BsCloudDownloadFill } from "react-icons/bs";

import {
    MainContainer,
    ContentContainer,
    ContentLeft,
    ContentRight,
    ContentTitle,
    Title,
    SubTitle,
    ContentWeek,
    ContentTitleWeek,
    TitleWeek,
    DescriptionWeek,
    ContentWeeks,
    TitleWeeks,
    DescriptionWeeks,
    ContentCardExercisesWeeks,
    CardExercisesWeeks,
    ContentTitlesWeeks,
    TitleCardExercisesWeeks,
    DescriptionCardExercisesWeeks,
} from "./styles";

const weekList = [
    {
        id: 1,
        week: "Semana 1",
        description: "Descrição sobre o exercício",
        exercisesList: [
            {
                id: 1,
                ex: "Exercício 1",
                creator: "S1 Criador por Ana Barbara",
            },
            {
                id: 2,
                ex: "Exercício 2",
                creator: "S1 Criador por Ana Barbara",
            },
            {
                id: 3,
                ex: "Exercício 3",
                creator: "S1 Criador por Ana Barbara",
            },
        ]
    },
    {
        id: 2,
        week: "Semana 2",
        description: "Descrição sobre o exercício",
        exercisesList: [
            {
                id: 1,
                ex: "Exercício 1",
                creator: "S2 Criador por Ana Barbara",
            },
            {
                id: 2,
                ex: "Exercício 2",
                creator: "S2 Criador por Ana Barbara",
            },
            {
                id: 3,
                ex: "Exercício 3",
                creator: "S2 Criador por Ana Barbara",
            },
        ]
    },
    {
        id: 3,
        week: "Semana 3",
        description: "Descrição sobre o exercício",
        exercisesList: [
            {
                id: 1,
                ex: "Exercício 1",
                creator: "S3 Criador por Ana Barbara",
            },
            {
                id: 2,
                ex: "Exercício 2",
                creator: "S3 Criador por Ana Barbara",
            },
            {
                id: 3,
                ex: "Exercício 3",
                creator: "S3 Criador por Ana Barbara",
            },
        ]
    },
];

function PatientExercises() {
    const [isActive, setIsActive] = useState(1);
    const [weekSelected, setWeekSelected] = useState(weekList[0]);
    const navigate = useNavigate();

    function currentWeek(week) {
        setWeekSelected(week)
    }

    return (
        <MainContainer>
            <NavBar />
            <ContentContainer>
                <ContentRight>
                    <ContentTitle>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <FiArrowLeft color="#803888" size={30} style={{ position: "relative", top: "10px", cursor: "pointer" }} onClick={() => navigate("/patienthome")} />
                            <Title>Meus Exercícios</Title>
                        </div>
                        <SubTitle>Veja os exercícios disponíveis</SubTitle>
                    </ContentTitle>
                    {weekList.map((week, index) =>
                        <ContentWeek>
                            <ContentTitleWeek key={index} onClick={() => { currentWeek(week); setIsActive(week.id) }}
                                style={{ backgroundColor: (isActive === week.id) ? '#e5e5e5' : '' }}>
                                <div style={{ display: "flex", flexDirection: "row" }} >
                                    <div>
                                        <FiBook color="#1E98D4" size={50} style={{ position: "relative", top: "7px" }} />
                                    </div>
                                    <div style={{ marginLeft: "5px" }}>
                                        <TitleWeek>{week.week}</TitleWeek>
                                        <DescriptionWeek>{week.description}</DescriptionWeek>
                                    </div>
                                </div>
                            </ContentTitleWeek>
                        </ContentWeek>
                    )}
                </ContentRight>
                <ContentLeft>
                    <ContentWeeks>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <TitleWeeks>{weekSelected.week}</TitleWeeks>
                                <DescriptionWeeks>
                                    Veja seus exercícios disponíveis
                                </DescriptionWeeks>
                            </div>
                            <div>
                                <BsCloudDownloadFill color="#000" size={50} />
                            </div>
                        </div>
                    </ContentWeeks>
                    {weekSelected.exercisesList.map((ex, index) =>
                        <ContentCardExercisesWeeks>
                            <CardExercisesWeeks key={index}>
                                <div style={{ display: "flex", flexDirection: "row", paddingTop: "150px" }} >
                                    <ContentTitlesWeeks>
                                        <TitleCardExercisesWeeks>{ex.ex}</TitleCardExercisesWeeks>
                                        <DescriptionCardExercisesWeeks>
                                            {ex.creator}
                                        </DescriptionCardExercisesWeeks>
                                    </ContentTitlesWeeks>
                                    <div>
                                        <BsCollectionPlayFill style={{ marginLeft: "40px" }} color="#000" size={30} />
                                        <FiHeart style={{ marginLeft: "150px" }} color="#1E98D4" size={15} />
                                        <FiShare2 style={{ marginLeft: "30px" }} color="#000" size={15} />
                                    </div>
                                </div>
                            </CardExercisesWeeks>
                        </ContentCardExercisesWeeks>
                    )}
                </ContentLeft>
            </ContentContainer>
        </MainContainer>
    );
}

export default PatientExercises;