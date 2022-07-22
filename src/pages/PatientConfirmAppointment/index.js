import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { FiArrowLeft, FiMapPin, FiClock } from "react-icons/fi";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import {
    MainContainer,
    ContentContainer,
    ContentRight,
    ContentArrowLeft,
    Content,
    ContentNameStreet,
    NameDoctor,
    Street,
    ContentDateHour,
    Date,
    Hour,
    ContentButton,
    Button,
} from "./styles";

function PatientConfirmAppointment() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { month } = useParams();
    const { day } = useParams();
    const { hour } = useParams();
    const [getDoctor, setDoctor] = useState({});
    const [getMonthLabel, setMonthLabel] = useState("");

    const getUserDoctor = async () => {
        try {
            let res = await fetch("http://18.215.217.253:3001/users/" + id);
            res = await res.json();
            setDoctor(res);
        } catch (err) { }
    };

    const setLabelMonth = async () => {
        if (month === '01') { setMonthLabel("Janeiro") }
        if (month === '02') { setMonthLabel("Fevereiro") }
        if (month === '03') { setMonthLabel("Março") }
        if (month === '04') { setMonthLabel("Abril") }
        if (month === '05') { setMonthLabel("Maio") }
        if (month === '06') { setMonthLabel("Junho") }
        if (month === '07') { setMonthLabel("Julho") }
        if (month === '08') { setMonthLabel("Agosto") }
        if (month === '09') { setMonthLabel("Setembro") }
        if (month === '10') { setMonthLabel("Outubro") }
        if (month === '11') { setMonthLabel("Novembro") }
        if (month === '12') { setMonthLabel("Dezembro") }
    }

    useEffect(() => {
        getUserDoctor();
        setLabelMonth();
    }, []);

    return (
        <MainContainer>
            <NavBar />
            <ContentContainer>
                <ContentRight>
                    <ContentArrowLeft>
                        <FiArrowLeft
                            color="#ffffff"
                            size={40}
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/patientscheduleappointment/" + id)}
                        />
                    </ContentArrowLeft>
                    <Content>
                        <ContentNameStreet>
                            <NameDoctor>{getDoctor.name}</NameDoctor>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <FiMapPin color="#ffffff" size={20} />
                                <Street>{getDoctor.streetName} - {getDoctor.city}</Street>
                            </div>
                        </ContentNameStreet>
                        <ContentDateHour>
                            <Date>{day} de {getMonthLabel}</Date>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <FiClock color="#ffffff" size={20} />
                                <Hour>{hour}H</Hour>
                            </div>
                        </ContentDateHour>
                    </Content>
                    <ContentButton onClick={() => navigate("/patientsuccessappointment/" + id + "/" + month + "/" + day + "/" + hour)}>
                        <Button>Confirmar</Button>
                    </ContentButton>
                </ContentRight>
            </ContentContainer>
        </MainContainer>
    );
}

export default PatientConfirmAppointment