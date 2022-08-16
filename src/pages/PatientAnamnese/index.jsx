import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiFileText, FiEdit } from "react-icons/fi";

import { api } from "../../services";

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

function PatientAnamnese() {
    const navigate = useNavigate();
    const [getAnamneses, setAnamneses] = useState({});
    const [getInfoDoc, setInfoDoc] = useState({});

    const getUserAnamneses = async () => {
        let user = JSON.parse(localStorage.getItem('@auth/user'));

        try {
            const { data } = await api.get("/anamnesis?id=" + user.id);
            setAnamneses(data)
        } catch (err) { }

    }

    const getUserInfo = async () => {
        try {
            const { data } = await fetch("/users/12");
            setInfoDoc(data)
        } catch (err) { }
    }

    useEffect(async () => {
      await Promise.all([
        getUserAnamneses(),
        getUserInfo()
      ])
    }, []);

    return (
        <MainContainer>
            <NavBar />
            <ContentContainer>
                <ContentRight>
                    <ContentDocuments>
                        <FiArrowLeft color="#1E98D4" size={30} onClick={() => navigate("/patienthome")} style={{ cursor: "pointer" }} />
                        <TitleDocuments>Minhas Anamneses</TitleDocuments>
                    </ContentDocuments>
                    {getAnamneses.length > 0 ? (
                        getAnamneses.map((anamnese, i) =>
                            <Content key={i}>
                                <FiFileText color="#1E98D4" size={40} style={{ position: "relative", top: "3px" }} />
                                <ContentTitle>
                                    <Title>{getInfoDoc.specialty}</Title>
                                    <Description>{getInfoDoc.name}</Description>
                                </ContentTitle>
                                <ContentButtons>
                                    <div style={{ marginLeft: "30px", display: "flex", flexDirection: "row", }} >
                                        <FiEdit color="#1E98D4" size={20} style={{ position: "relative", top: "3px" }} />
                                        <ButtonDown onClick={() => navigate("/patientansweranamnese/" + anamnese.id)}>Responder</ButtonDown>
                                    </div>
                                </ContentButtons>
                            </Content>
                        )
                    ) : (<Content>
                        <ContentTitle><Title>Nenhuma Anamnese encontrada</Title></ContentTitle>
                    </Content>)}
                </ContentRight>
            </ContentContainer>
        </MainContainer>
    );
}

export default PatientAnamnese;
