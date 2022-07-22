import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiFileText, FiEdit } from "react-icons/fi";

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

    const getUserAnamneses = async () => {
        let user = JSON.parse(localStorage.getItem('@auth/user'));

        try {
            let res = await fetch("http://18.215.217.253:3001/anamnesis?id=" + user.id);
            res = await res.json();
            let tempAnamnese = [];

            res.map((res) => {
                let resDoc = fetch("http://18.215.217.253:3001/users/" + res.professionalId);
                resDoc = resDoc.json();
                tempAnamnese.push({ anamnese: res, doctor: resDoc })
            })
            setAnamneses(tempAnamnese)

        } catch (err) { }

    }

    useEffect(() => {
        getUserAnamneses();
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
                                    <Title>{anamnese.doctor.specialty}</Title>
                                    <Description>{anamnese.doctor.name}</Description>
                                </ContentTitle>
                                <ContentButtons>
                                    <div style={{ marginLeft: "30px", display: "flex", flexDirection: "row", }} >
                                        <FiEdit color="#1E98D4" size={20} style={{ position: "relative", top: "3px" }} />
                                        <ButtonDown>Responder</ButtonDown>
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
