import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import {
    MainContainer,
    ContentContainer,
    ContentRight,
    ContentTitle,
    Title,
    ContentDateHour,
    ContentDate,
    Date,
    ContentHour,
    Hour,
    ContentText,
    TitleText,
    Text,
    ContentButton,
    Button,
    ContentMonths,
    Month
} from "./styles";

function PatientScheduleAppointment() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [getScheduleAviable, setScheduleAviable] = useState({});
    const [getMonthsAviable, setMonthsAviable] = useState([]);
    const [getDays, setDays] = useState([]);
    const [getHours, setHours] = useState({});
    const [getSelectedDay, setSelectedDay] = useState("");
    const [getSelectedMonth, setSelectedMonth] = useState("");


    const getSchedule = async () => {
        try {
            let res = await fetch("http://18.215.217.253:3001/schedules/" + id);
            res = await res.json();
            let tempDate = [];
            let tempIndex = 0;
            let tempMonth = '00';
            let allMonths = [];

            res.map((res) => {
                res.dates.map((date) => {
                    let d = date.date.split("/");
                    if (d[1] !== tempMonth) {
                        tempMonth = d[1];
                        tempDate.push({ month: d[1], days: [{ day: d[0], hours: date.availability }] });
                        allMonths.push(d[1]);
                        tempIndex += 1;
                    } else {
                        tempDate[tempIndex - 1].days.push({ day: d[0], hours: date.availability });
                    }
                });
            });

            setMonthsAviable(allMonths);
            setScheduleAviable(tempDate);
        } catch (err) { }
    };

    const showDays = (month) => {
        setSelectedMonth(month)
        getScheduleAviable.map((date) => {
            if (date.month === month) {
                let tempDays = [];
                date.days.map((day) => { tempDays.push(day.day) });
                setDays(tempDays)
            }
        });
    }

    const showHours = (day) => {
        setSelectedDay(day);
        getScheduleAviable.map((date) => {
            date.days.map((d) => {
                if (d.day === day) { setHours(d.hours) }
            });
        });
    }


    useEffect(() => {
        getSchedule();
    }, []);

    return (
        <MainContainer>
            <NavBar />
            <ContentContainer>
                <ContentRight>
                    <ContentTitle>
                        <FiArrowLeft
                            color="#ffffff"
                            size={30}
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/patientinfodoctor/" + id)}
                        />
                        <Title>Marque seu horário</Title>
                    </ContentTitle>
                    <ContentMonths>
                        {getMonthsAviable.includes("01")
                            ? (<Month onClick={() => showDays("01")}>Janeiro</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Janeiro</Month>)}

                        {getMonthsAviable.includes("02")
                            ? (<Month onClick={() => showDays("02")}>Fevereiro</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Fevereiro</Month>)}

                        {getMonthsAviable.includes("06")
                            ? (<Month onClick={() => showDays("03")}>Março</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Março</Month>)}

                        {getMonthsAviable.includes("04")
                            ? (<Month onClick={() => showDays("04")}>Abril</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Abril</Month>)}

                        {getMonthsAviable.includes("05")
                            ? (<Month onClick={() => showDays("05")}>Maio</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Maio</Month>)}

                        {getMonthsAviable.includes("06")
                            ? (<Month onClick={() => showDays("06")}>Junho</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Junho</Month>)}

                        {getMonthsAviable.includes("07")
                            ? (<Month onClick={() => showDays("07")}>Julho</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Julho</Month>)}

                        {getMonthsAviable.includes("08")
                            ? (<Month onClick={() => showDays("08")}>Agosto</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Agosto</Month>)}

                        {getMonthsAviable.includes("09")
                            ? (<Month onClick={() => showDays("09")}>Setembro</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Setembro</Month>)}

                        {getMonthsAviable.includes("10")
                            ? (<Month onClick={() => showDays("10")}>Outubro</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Outubro</Month>)}

                        {getMonthsAviable.includes("11")
                            ? (<Month onClick={() => showDays("11")}>Novembro</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Novembro</Month>)}

                        {getMonthsAviable.includes("12")
                            ? (<Month onClick={() => showDays("12")}>Dezembro</Month>)
                            : (<Month style={{ color: "#ccc", cursor: "initial", opacity: "0.8" }}>Dezembro</Month>)}

                    </ContentMonths>
                    <ContentDate>
                        {getDays.length > 0 ? (
                            getDays.map((day, i) =>
                                <Date key={i} onClick={() => showHours(day)}>{day}</Date>
                            )
                        ) : (false)}
                    </ContentDate>
                    <ContentHour>
                        {getHours.length > 0 ? (
                            getHours.map((hour, i) =>
                                hour.isAvailable ? (
                                    <Hour key={i} onClick={() => navigate("/patientconfirmappointment/" + id + "/" + getSelectedMonth + "/" + getSelectedDay + "/" + hour.time)}>{hour.time}H</Hour>
                                ) : (<Hour key={i} style={{ backgroundColor: "#aaa", cursor: "initial" }}>{hour.time}H</Hour>)
                            )
                        ) : (false)}
                    </ContentHour>
                    <ContentText>
                        <TitleText>Resumo</TitleText>
                        <Text>
                            Selecione o motivo previo para sua contulta abaixo e descreva em
                            poucas palavras as suas necessidades para pode ter atender o
                            melhor possivel
                        </Text>
                    </ContentText>
                </ContentRight>
            </ContentContainer>
        </MainContainer>
    );
}

export default PatientScheduleAppointment
