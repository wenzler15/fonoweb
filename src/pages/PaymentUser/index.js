import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InputMask from "react-input-mask";
import ResponsiveAppBar from "../../components/bar";
import {
    MainContainer,
    ContentPayment,
    Title,
    ContentCreditCard,
    Container,
    ContentRadio,
    ContentAssinatura,
    DadoProfissional,
    Plano,
    ValorPlano,
    ContentTerm,
    LinkModal,
    ContentButton
} from "./styles";

import { Row, Col, Form, Button, Modal } from 'react-bootstrap';

function PaymentUser() {
    const location = useLocation();

    const pay = async () => {

    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <MainContainer style={{ background: "#E5E5E5" }}>
            <ContentPayment>
                {/* <Title>Pagamento</Title>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <ContentRadio key="radio-payment" className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        id="radio-creditCard"
                                        label="Cartão de crédito"
                                    />
                                </ContentRadio>
                                <ContentCreditCard>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Número do cartão</Form.Label>
                                        <Form.Control datacheckout="cardNumber" placeholder='0000 0000 0000 0000' as={InputMask} mask='9999 9999 9999 9999' />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome impresso no cartão</Form.Label>
                                        <Form.Control id="form-form-checkout__cardholderName" type="text" placeholder="João da Silva" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Validade</Form.Label>
                                                <Form.Control id="form-checkout__expirationDate" type="text" placeholder="00/0000" as={InputMask} mask='99/9999' />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Código de segurança</Form.Label>
                                                <Form.Control id="form-checkout__securityCode" type="text" placeholder="000" as={InputMask} mask='999' />
                                            </Form.Group>
                                        </Col>
                                        <Row>
                                            <Form.Control id="form-checkout__cardholderName" type="text" hidden value={location.state.name} />
                                            <Form.Control id="form-checkout__cardholderEmail" type="text" hidden value={location.state.email} />
                                            <Form.Control id="form-checkout__installments" type="text" hidden value="1" />
                                            <Form.Control id="form-checkout__identificationType" type="text" hidden value="CPF" />
                                            <Form.Control id="form-checkout__identificationNumber" type="text" hidden value={location.state.cpf} />
                                        </Row>
                                    </Row>
                                </ContentCreditCard>
                            </Row>
                            <Row>
                                <ContentRadio key="radio-boleto" className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        id="radio-boleto"
                                        label="Boleto"
                                        disabled
                                    />
                                </ContentRadio>
                            </Row>
                        </Col>
                        <Col>
                            <ContentAssinatura>Assinatura Premium Gold</ContentAssinatura>
                            <DadoProfissional>{location.state.name}</DadoProfissional>
                            <DadoProfissional>CPF: {location.state.cpf}</DadoProfissional>
                            <DadoProfissional>{location.state.address}</DadoProfissional>
                            <Plano>Plano Mensal<ValorPlano>R$129,00</ValorPlano>/mês</Plano>
                            <ContentTerm>
                                <Form.Check
                                    type="checkbox"
                                    id="check-term"
                                    label="Aceita os termos de cobrança recorrente"
                                />
                                <DadoProfissional><LinkModal onClick={handleShow}>Clique aqui</LinkModal> para saber mais.</DadoProfissional>
                            </ContentTerm>
                            <ContentButton>
                                <Button
                                    style={{
                                        width: "300px",
                                        borderRadius: "30px",
                                        backgroundColor: "#1E98D4",
                                        color: "#fff",
                                        border: "none",
                                        cursor: "pointer"
                                    }}>
                                    Assinar
                                </Button>
                            </ContentButton>
                        </Col>
                    </Row>
                </Container> */}
            </ContentPayment>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Termo de uso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        What is Lorem Ipsum?
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <p>
                        Why do we use it?
                    </p>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content
                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many desktop publishing packages and web
                        page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                        ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                        over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                    <p>
                        Where does it come from?
                    </p>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                        piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                        McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                        cites of the word in classical literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                        on the theory of ethics, very popular during the Renaissance. The first line of Lorem
                        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <p>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                        Cicero are also reproduced in their exact original form, accompanied by English versions
                        from the 1914 translation by H. Rackham.
                    </p>
                    <p>
                        Where can I get some?
                    </p>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't
                        look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden in the middle of text. All
                        the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary, making this the first true generator on the Internet. It uses a dictionary
                        of over 200 Latin words, combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                        always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </MainContainer>

    )
}

export default PaymentUser;