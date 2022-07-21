import React from "react";
import NavBar from "../../components/navBar";
import { FiClock, FiMapPin } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

import {
    MainContainer,
    ContentContainer,
    ContentRight,
    DoctorPhoto,
    ContentScheduleQuery,
    Content,
    NameDoctor,
    ScheduleOpen,
    TimeQuery,
    ContentDown,
    OfficeAddress,
    Specialty,
    ContentText,
    Text,
    ContentButton,
    Button,
} from "./styles";

function PatientInfoDoctor() {
    const navigate = useNavigate();
    let params = useLocation();

    return (
        <MainContainer>
            <NavBar />
            <ContentContainer>
                <ContentRight>
                    <ContentScheduleQuery>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div>
                                <DoctorPhoto />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                marginLeft: '350px',
                                alignItems: 'flex-start',
                                marginBottom: '50px'
                            }}>
                                <Content>
                                    <NameDoctor>Dra. Adriana</NameDoctor>
                                    <ScheduleOpen>Agenda aberta</ScheduleOpen>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            marginTop: "30px",
                                        }}
                                    >
                                        <FiClock color="#ffffff" size={20} />
                                        <TimeQuery>40 à 60 min</TimeQuery>
                                    </div>
                                </Content>
                                <ContentDown>
                                    <OfficeAddress>
                                        <FiMapPin color="#ffffff" size={20} />
                                        Rua consultorio da consulta - Bairro{" "}
                                    </OfficeAddress>
                                    <Specialty>Fonodiologo especialista</Specialty>
                                </ContentDown>
                            </div>
                        </div>
                    </ContentScheduleQuery>
                    <ContentText>
                        <Text>
                            Aqui será todas suas especialidades, aqui vou so preencher com
                            texto simbolicos, Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It
                            was popularised in the 1960
                        </Text>
                    </ContentText>

                    <ContentButton onClick={() => navigate("/booktime")}>
                        <Button>Agendar consulta</Button>
                    </ContentButton>
                </ContentRight>
            </ContentContainer>
        </MainContainer>
    );
}

export default PatientInfoDoctor
