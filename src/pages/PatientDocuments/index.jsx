import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiBook, FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";

import {
    MainContainer,
    ContentContainer,
    ContentRight,
    ContentDocuments,
    TitleDocuments,
    Content,
    ContentTitle,
    Title,
    Description,
    ContentButtons,
    ButtonUp,
    ButtonDown,
} from "./styles";
import { FloatingWhatsAppButton } from "../../common/components";

const documentList = [
    {
        id: 1,
        evaluation: "Avaliação 1 do Dr. Fono",
        description: "Sobre a consulta medica, resumo de como foi o atendimento do paciente aqui .",
        download: "https://google.com"
    },
    {
        id: 2,
        evaluation: "Avaliação 2 do Dr. Fono",
        description: "Sobre a consulta medica, resumo de como foi o atendimento do paciente aqui .",
        download: "https://google.com"
    },
    {
        id: 3,
        evaluation: "Avaliação 3 do Dr. Fono",
        description: "Sobre a consulta medica, resumo de como foi o atendimento do paciente aqui .",
        download: "https://google.com"
    },
    {
        id: 4,
        evaluation: "Avaliação 4 do Dr. Fono",
        description: "Sobre a consulta medica, resumo de como foi o atendimento do paciente aqui .",
        download: "https://google.com"
    },
];


function PatientDocuments() {
    const navigate = useNavigate();

    return (
        <MainContainer>
            
            <ContentContainer>
                <ContentRight>
                    <ContentDocuments>
                        <FiArrowLeft color="#1E98D4" size={30} onClick={() => navigate("/patienthome")} style={{ cursor: "pointer" }} />
                        <TitleDocuments>Documentos</TitleDocuments>
                    </ContentDocuments>
                    {documentList.map((doc, index) =>
                        <Content key={index}>
                            <FiBook color="#1E98D4" size={40} style={{ position: "relative", top: "3px" }} />
                            <ContentTitle>
                                <Title>{doc.evaluation}</Title>
                                <Description>{doc.description}</Description>
                            </ContentTitle>
                            <ContentButtons>
                                <div style={{ marginLeft: "30px", display: "flex", flexDirection: "row", }} >
                                    <FiArrowDownCircle color="#1E98D4" size={20} style={{ position: "relative", top: "3px" }} />
                                    <ButtonDown>Baixar</ButtonDown>
                                </div>
                                <div style={{ marginLeft: "30px", display: "flex", flexDirection: "row" }} >
                                    <FiArrowUpCircle color="#803888" size={20} style={{ position: "relative", top: "3px" }} />
                                    <ButtonUp >Enviar</ButtonUp>
                                </div>
                            </ContentButtons>
                        </Content>
                    )}
                </ContentRight>
            </ContentContainer>
            
        </MainContainer>
    );
}

export default PatientDocuments;
