import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services";

import { Container } from "./styles";

function PatientAnswerAnamnese() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [getAnamneses, setAnamneses] = useState({});

    const getUserAnamneses = async () => {
        let user = JSON.parse(localStorage.getItem('@auth/user'));

        try {
            const { data } = await fetch("/anamnesis?id=" + user.id);
            data.map((res) => {
                if (res.id.toString() === id) { setAnamneses(res.anamnesis) }
            })
        } catch (err) { }

    }

    function handleChangeResponseInput(event, anamnese, res, i, ia) {
        anamnese.respostas[i][event.target.name] = event.target.value;
        setAnamneses[ia] = anamnese;
    }

    const saveAnswers = async () => {
        let save = await api.put("anamnesis/" + id, { anamnesis: getAnamneses });
        navigate("/patienthome");
    }


    useEffect(() => {
        getUserAnamneses();
    }, []);

    return (
        <Container>
            <NavBar />
            <section className="info">
                <div className="info-top">
                    <div>
                        <h1>Anamnese</h1>
                    </div>

                </div>
                {getAnamneses.length > 0 ? (
                    getAnamneses.map((anamnese, ia) =>
                        <div className="info-bottom">
                            <div key={ia} className="anamnese-info" data-index={ia}>
                                <div className="anamnese-info-top">
                                    <div>
                                        <input
                                            type="text"
                                            disabled='true'
                                            value={anamnese.pergunta}
                                        />
                                    </div>
                                </div>
                                <div className="anamnese-info-bottom">
                                    {anamnese.respostas.length > 0 ? (
                                        anamnese.respostas.map((res, i) =>
                                            <div key={i} className="anamnese-info-bottom">
                                                <div>
                                                    <input
                                                        type="text"
                                                        placeholder="Insira uma resposta"
                                                        name={'resposta' + (i + 1)}
                                                        onChange={(event) => handleChangeResponseInput(event, anamnese, res, i, ia)}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    ) : (false)}
                                </div>
                            </div>
                        </div>
                    )
                ) : (false)}
                <div className="box-action">
                    <button onClick={() => saveAnswers()}>Enviar respostas</button>
                </div>
            </section>
        </Container>
    );
}

export default PatientAnswerAnamnese;
