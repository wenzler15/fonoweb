import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { FiClock, FiMapPin } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty } from "lodash";

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
    const { id } = useParams();
    const [getDoctor, setDoctor] = useState({});

    const getUserDoctor = async () => {
        try {
            let res = await fetch("http://18.215.217.253:3001/users/" + id);
            res = await res.json();
            setDoctor(res);
        } catch (err) { }
    };

    useEffect(() => {
        getUserDoctor();
    }, []);

    return (
        <MainContainer>
            <NavBar />
            <ContentContainer>
                <ContentRight>
                    {!isEmpty(getDoctor) ? (
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
                                        <NameDoctor>{getDoctor.name}</NameDoctor>
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
                                            {getDoctor.streetName} - {getDoctor.city}{" "}{" "}
                                        </OfficeAddress>
                                        <Specialty>{getDoctor.specialty}</Specialty>
                                    </ContentDown>
                                </div>
                            </div>
                        </ContentScheduleQuery>
                    ) : (false)}
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

                    <ContentButton onClick={() => navigate("/patientscheduleappointment/" + id)}>
                        <Button>Agendar consulta</Button>
                    </ContentButton>
                </ContentRight>
            </ContentContainer>
        </MainContainer>
    );
}

export default PatientInfoDoctor
