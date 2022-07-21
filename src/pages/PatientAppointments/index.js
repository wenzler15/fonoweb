import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RangePicker } from 'react-styled-calendar';

import {
    MainContainer,
    ContentContainer,
    ContentRight,
    ContentDocuments,
    TitleDocuments,
    ContentFilter,
    ContentSelect,
    Select,
    Option,
    FilterLabel,
    ContentCalendar,
    ContentResult,
    ContentLastQuery,
    ContentPhotoLastQuery,
    PhotoLastQuery,
    NameDoctorLastQuery,
    LastDateQuery,
    ResumeLastQuery,
    ContentResumeLastQuery,
    OpacityResumeLastQuery,
    ButtonResumeLastQuery,
} from "./styles";



function PatientAppointments() {
    const navigate = useNavigate();

    return (
        <MainContainer>
            <NavBar />
            <ContentContainer>
                <ContentRight>
                    <ContentDocuments>
                        <FiArrowLeft color="#1E98D4" size={30} onClick={() => navigate("/patienthome")} style={{ cursor: "pointer" }} />
                        <TitleDocuments>Consultas realizadas</TitleDocuments>
                    </ContentDocuments>
                    <ContentFilter>
                        <FilterLabel>Filtar datas</FilterLabel>
                        <ContentSelect>
                            <Select>
                                <Option>5 Dias</Option>
                                <Option>15 Dias</Option>
                                <Option>25 Dias</Option>
                            </Select>
                        </ContentSelect>
                        <ContentCalendar>
                            <section>
                                <RangePicker className="range" fromInputLabel="De" toInputLabel="Até" />
                            </section>
                        </ContentCalendar>
                    </ContentFilter>
                    <ContentResult>
                        Consultas encontradas (20)
                    </ContentResult>

                    <ContentLastQuery>
                        <ContentPhotoLastQuery>
                            <PhotoLastQuery></PhotoLastQuery>
                        </ContentPhotoLastQuery>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <NameDoctorLastQuery>Dr. Emiliano</NameDoctorLastQuery>
                            <LastDateQuery>23 de Dezembro</LastDateQuery>
                        </div>
                        <div style={{ marginTop: "5px" }}>
                            <ContentResumeLastQuery>
                                <ResumeLastQuery>
                                    Sobre a consulta medica, resumo de como foi o atendimento do
                                    paciente aqui .
                                </ResumeLastQuery>
                            </ContentResumeLastQuery>
                        </div>{" "}
                    </ContentLastQuery>

                </ContentRight>
            </ContentContainer>
        </MainContainer>
    );
}

export default PatientAppointments;
