import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar";
import { BsCheck2Circle } from "react-icons/bs";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { api } from "../../services";

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
import { FloatingWhatsAppButton } from "../../common/components";

function PatientSuccessAppointment() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { month } = useParams();
    const { day } = useParams();
    const { hour } = useParams();

    const saveAppointment = async () => {
        const user = JSON.parse(localStorage.getItem('@auth/user'));

        const appointment = await api.post("/appointment", {
          date: `2022-${month}-${day}`,
          hour,
          clientId: user.id,
          professionalId: id,
          status: "Aguardando"
        });

        console.log(appointment)
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
            <FloatingWhatsAppButton />
        </MainContainer>
    );
}

export default PatientSuccessAppointment
