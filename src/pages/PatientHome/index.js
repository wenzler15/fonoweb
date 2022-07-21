import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { useNavigate, useLocation } from "react-router-dom";
import { FiSearch, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";

import {
    MainContainer,
    ContentContainer,
    ContentLeft,
    ContentRight,
    ContentTitle,
    Title,
    SubTitle,
    ContentSelectCity,
    SelectCity,
    IconShearch,
    ContentSelect,
    ContentTextSelect,
    Select,
    Option,
    ContentResultFilter,
    TextResultFilter,
    ContentResult,
    OptionCity,
    Contenthigher,
    ContentPhotoHigher,
    PhotoHigher,
    NameDoctor,
    ButtonContactDoctor,
    ContentResumeHigher,
    Description,
    ConsultationLocation,
    ContentButton,
    Button,
    TitleQuery,
    ContentCard,
    Card,
    ContentDayMonth,
    DayMonth,
    ContentNameDoctorCard,
    NameDoctorCard,
    ConsultationLocationCard,
    TimeCard,
    ContentButtonCard,
    OpacityButtonCard,
    ButtonCard,
    ContentTitleLastQuery,
    TitleLastQuery,
    ArrowRight,
    ContentLastQuery,
    ContentPhotoLastQuery,
    PhotoLastQuery,
    NameDoctorLastQuery,
    LastDateQuery,
    ResumeLastQuery,
    ContentResumeLastQuery,
    ContentResultEmpty
} from "./styles";

const doctorList = [
    {
        id: 1,
        name: 'Dra. Adriana Mendes',
        description: 'Vamos descrever o resumo do profissional para que os usuarios possam entender mais da sua expecialidade.',
        end: 'Rua consultorio da consulta - Bairro'
    },
    {
        id: 1,
        name: 'Dra. Adriana Mendes',
        description: 'Vamos descrever o resumo do profissional para que os usuarios possam entender mais da sua expecialidade.',
        end: 'Rua consultorio da consulta - Bairro'
    },
    {
        id: 1,
        name: 'Dra. Adriana Mendes',
        description: 'Vamos descrever o resumo do profissional para que os usuarios possam entender mais da sua expecialidade.',
        end: 'Rua consultorio da consulta - Bairro'
    },
    {
        id: 1,
        name: 'Dra. Adriana Mendes',
        description: 'Vamos descrever o resumo do profissional para que os usuarios possam entender mais da sua expecialidade.',
        end: 'Rua consultorio da consulta - Bairro'
    },
    {
        id: 1,
        name: 'Dra. Adriana Mendes',
        description: 'Vamos descrever o resumo do profissional para que os usuarios possam entender mais da sua expecialidade.',
        end: 'Rua consultorio da consulta - Bairro'
    },
    {
        id: 1,
        name: 'Dra. Adriana Mendes',
        description: 'Vamos descrever o resumo do profissional para que os usuarios possam entender mais da sua expecialidade.',
        end: 'Rua consultorio da consulta - Bairro'
    },
    {
        id: 1,
        name: 'Dra. Adriana Mendes',
        description: 'Vamos descrever o resumo do profissional para que os usuarios possam entender mais da sua expecialidade.',
        end: 'Rua consultorio da consulta - Bairro'
    }
]

function PatientHome() {
    const navigate = useNavigate();

    const [getStateDoctors, setStateDoctors] = useState({});
    const [getDoctors, setDoctors] = useState({});
    const [getSpecialty, setSpecialty] = useState({});
    const [selected, setSelected] = useState(0);

    const getUsersDoctor = async (id) => {
        try {
            let resDoctor;

            (id == 0) ? resDoctor = await fetch("http://18.215.217.253:3001/professionals")
                : resDoctor = await fetch("http://18.215.217.253:3001/professionals?specialty=" + id);

            resDoctor = await resDoctor.json();
            setDoctors(resDoctor);
        } catch (err) { }
    };

    const getSpecialtyDoctor = async () => {
        try {
            let resSpec = await fetch("http://18.215.217.253:3001/specialtys");
            resSpec = await resSpec.json();
            setSpecialty(resSpec);
        } catch (err) { }
    };

    const getStateDoctor = async () => {
        try {
            let resState = await fetch("http://18.215.217.253:3001/users-addresses");
            resState = await resState.json();
            let tempStateList = [];
            resState.map((state) => {
                if (tempStateList.includes(state.state) || state.state == null || state.state == '') { return false }
                else { tempStateList.push(state.state); }
            })
            console.log(tempStateList)
            //setStateDoctors(resState);
        } catch (err) { }
    };

    const filterDoctor = async event => {
        setSelected(event.target.value);
        getUsersDoctor(event.target.value);
    }

    useEffect(() => {
        getUsersDoctor(0);
        getSpecialtyDoctor();
        getStateDoctor();
    }, []);

    return (
        <MainContainer>
            <NavBar />
            <ContentContainer>
                <ContentRight>
                    <ContentTitle>
                        <Title>Selecione sua cidade</Title>
                        <SubTitle>
                            Localize o Fonodiologo diponivel na sua cidade ou nas
                            proximidades.
                        </SubTitle>
                    </ContentTitle>
                    <ContentSelectCity>
                        <SelectCity>
                            <OptionCity>Busque sua cidade</OptionCity>
                            <OptionCity>Brasilia</OptionCity>
                            <OptionCity>São Paulo</OptionCity>
                            <OptionCity>Rio de Janeiro</OptionCity>
                        </SelectCity>
                        <IconShearch>
                            <FiSearch color="#D3CECE" size={20} />
                        </IconShearch>
                    </ContentSelectCity>

                    <ContentSelect>
                        <ContentTextSelect>Escolha uma especialidade</ContentTextSelect>
                        <Select value={selected} onChange={filterDoctor}>
                            <Option value='0'>Especialidade</Option>
                            {getSpecialty.length > 1 ? (
                                getSpecialty?.map((specialty, index) =>
                                    <Option key={index} value={specialty.id}>{specialty.name}</Option>
                                )) : (false)
                            }
                        </Select>
                    </ContentSelect>

                    <ContentResultFilter>
                        <TextResultFilter>Resultador de pesquisa ({(getDoctors?.length) ? getDoctors?.length : '0'})</TextResultFilter>
                    </ContentResultFilter>
                    {getDoctors.length ? (
                        getDoctors?.map((doc, index) =>
                            <ContentResult key={index}>
                                <Contenthigher>
                                    <ContentPhotoHigher>
                                        <PhotoHigher></PhotoHigher>
                                    </ContentPhotoHigher>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
                                        <NameDoctor>{doc.name}</NameDoctor>
                                        <ButtonContactDoctor>Contatar</ButtonContactDoctor>
                                    </div>
                                    <div style={{ marginTop: "5px" }} >
                                        <ContentResumeHigher>
                                            <Description>{doc.specialty}</Description>
                                            <ConsultationLocation>
                                                <FiMapPin color="#1E98D4" size={10} style={{ marginRight: 10 }} />{" "}
                                                {doc.streetName} - {doc.city}
                                            </ConsultationLocation>
                                        </ContentResumeHigher>
                                    </div>
                                </Contenthigher>
                            </ContentResult>
                        )
                    ) : (<ContentResultEmpty>Nenhum doutor encontrado.</ContentResultEmpty>)}
                </ContentRight>

                <ContentLeft>
                    <ContentTitle>
                        <Title>Minhas consultas</Title>
                        <TitleQuery>Consulta em aberto</TitleQuery>
                    </ContentTitle>

                    <ContentCard>
                        <Card>
                            <ContentDayMonth>
                                <DayMonth>04 de Julho</DayMonth>
                            </ContentDayMonth>

                            <ContentNameDoctorCard>
                                <NameDoctorCard>DRA.GABRIELA</NameDoctorCard>
                            </ContentNameDoctorCard>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div>
                                    <ConsultationLocationCard>
                                        <FiMapPin color="#1E98D4" size={10} style={{ marginRight: 10 }} />{" "}
                                        Rua consultorio da consulta - Bairro{" "}
                                    </ConsultationLocationCard>

                                    <TimeCard>
                                        <FiClock color="#fff" size={10} style={{ marginRight: 10 }} />
                                        15H
                                    </TimeCard>
                                </div>
                                <ContentButtonCard>
                                    <OpacityButtonCard>
                                        <ButtonCard>
                                            <FiArrowRight color="#fff" size={30} />
                                        </ButtonCard>
                                    </OpacityButtonCard>
                                </ContentButtonCard>
                            </div>
                        </Card>
                    </ContentCard>
                    <ContentTitleLastQuery>
                        <TitleLastQuery>Ultimas consultas</TitleLastQuery>
                        <ArrowRight
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/schedulequery")}
                        >
                            <FiArrowRight color="#1E98D4" size={30} />
                        </ArrowRight>
                    </ContentTitleLastQuery>

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
                </ContentLeft>
            </ContentContainer>
        </MainContainer>
    );
}

export default PatientHome;
