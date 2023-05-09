import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Login.css"
import fim from './img/dog.svg'






export const LoginPage = () => {
    return (
        <>
            <div className="login">
                <Container>
                    <Row className='justify-content-space-between'>
                        <Col lg={6}>
                            <div className="xard">
                                <h1 className="ji">Запишитесь <br />
                                    на ближайший мастер-класс <br />
                                    прямо сейчас</h1>
                                <input className='inp' type={Text} placeholder='Имя' />
                                <input className='inp' type={Text} placeholder='Телефон' />
                                <button className='btn10'>Записаться</button>
                                <p className="end">Нажимая на кнопку “Отправить”, <br />
                                    вы даете согласие на обработку своих персональных данных</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <img className='fim' src={fim} alt="" />

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
