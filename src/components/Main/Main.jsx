import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Main.css"
import cat from './img/cat.svg'
import a1 from './img/a1.svg'
import a2 from './img/users.svg'
import a3 from './img/a3.svg'
import a4 from './img/a4.svg'


export const MainPage = () => {
    return (
        <>
            <main>
                <Container>
                    <Row >
                        <Col lg={10}>
                            <h1 className='chto'>Что такое мастер-класс по мультипликации?</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-space-between'>
                        <Col lg={6}>
                            <h5 className='eto'>Это незабываемое событие <br /> для каждого ребенка </h5>
                            <p className='na'>На мастер-классе дети узнают о мультипликации, <br /> фантазируют, создают настоящий мультфильм, <br /> играют и веселятся! <br />  http://мультфраншиза.рф/confidentiality.pdf </p>
                            <img className='cat' src={cat} alt="" />
                        </Col>
                        <Col lg={3}>
                            <div className='ard'>
                                <div className="circle">
                                    <img className='a1' src={a1} alt="" />
                                </div>
                                <h1 className='clock'>от 1,5 часов</h1>
                                <p className='dlit'>Длительность <br />
                                    мастер-класса</p>
                            </div>
                            <div className='ard'>
                                <div className="circle">
                                    <img className='a1' src={a2} alt="" />
                                </div>
                                <h1 className='clock'>от 1,5 часов</h1>
                                <p className='dlit'>Длительность <br />
                                    мастер-класса</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='ard'>
                                <div className="circle">
                                    <img className='a1' src={a3} alt="" />
                                </div>
                                <h1 className='clock'>от 300 руб.</h1>
                                <p className='dlit'>Стоимость <br />
                                    участия</p>
                            </div>
                            <div className='ard'>
                                <div className="circle">
                                    <img className='a1' src={a4} alt="" />
                                </div>
                                <h1 className='clock'>Мультфильм</h1>
                                <p className='dlit'>Удивите родных <br /> и друзей</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </main>
        </>
    );
}
