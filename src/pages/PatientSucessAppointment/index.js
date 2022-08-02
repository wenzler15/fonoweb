import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { BsCheck2Circle } from "react-icons/bs";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import api from "../../services";

import {
    MainContainer,
    ContentContainer,
    ContentRight,
    ContentImgCheck,
    ContentMenssageSuccessfully,
    MenssageSuccessfully,
    ContentButton,
    Button,
} from "./styles";

function PatientSuccessAppointment() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { month } = useParams();
    const { day } = useParams();
    const { hour } = useParams();

    const saveAppointment = async () => {
        let user = JSON.parse(localStorage.getItem('@auth/user'));

        let appointment = {
            "date": day + "/" + month + "/2022",
            "hour": hour,
            "clientId": user.id,
            "professionalId": id,
            "status": "Aguardando"
        }

        let ap = await api.post("/appointment", appointment);
        console.log(ap)
    }

    useEffect(() => {
        saveAppointment();
    }, []);
    return (
        <MainContainer>
            <NavBar />
            <ContentContainer>
                <ContentRight>
                    <ContentImgCheck>
                        <BsCheck2Circle color="#ffffff" size={80} />
                    </ContentImgCheck>

                    <ContentMenssageSuccessfully>
                        <MenssageSuccessfully>
                            Consulta agendada com sucesso
                        </MenssageSuccessfully>
                    </ContentMenssageSuccessfully>

                    <ContentButton onClick={() => navigate("/patienthome")}>
                        <Button>Voltar para Home</Button>
                    </ContentButton>
                </ContentRight>
            </ContentContainer>
        </MainContainer>
    );
}

export default PatientSuccessAppointment