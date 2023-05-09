import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Section.css"
import check from './img/check.svg'




export const SectionPage = () => {
    return (
        <>
            <section className='sec1'>
                <Container>
                    <Row>
                        <Col lg={7}>
                            <h1 className='cht'>Что дети делают на мастер-классе?</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-space-between'>
                        <Col lg={4}>
                            <div className="bard">
                                <button className='btni3'>придумывают сюжет</button>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="bardi">
                                <button className='btn3'>создают персонажей</button>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="bardis">
                                <button className='btna3'>снимают мультфильм</button>
                            </div>
                        </Col>

                    </Row>
                    <Row className='justify-content-space-between'>
                        <Col lg={3}>
                            <div className="bar">
                                <button className='btna3'>озвучивают своих героев</button>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="bardiv">
                                <button className='btns3'>вместе смотрят что получилось!</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={10}>
                            <h1 className='pochem'>Почему стоит побывать на мастер-классе <br />
                                по мультипликации?</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-space-between'>
                        <Col lg={6}>
                            <div className="dar">
                                <div className="ll">
                                    <img className='check' src={check} alt="" />
                                </div>
                                <div className="box">
                                    <h4 className='box-t'>Это незабываемое событие для ребенка</h4>
                                    <p className='text-p'>Дети обожают мультики, а создать настоящий мультфильм <br /> своими руками - это просто восторг! </p>
                                </div>
                            </div>
                            <div className="dar">
                                <div className="ll">
                                    <img className='check' src={check} alt="" />
                                </div>
                                <div className="box">
                                    <h4 className='box-t'>Это эксклюзивный и уникальный вид <br /> досуга на рынке детских услуг</h4>
                                    <p className='text-p'>
                                        Где ещё, как не в Мультистории, можно прийти и создать <br /> настоящий мультфильм своими руками?</p>
                                </div>
                            </div>
                            <div className="dar">
                                <div className="ll">
                                    <img className='check' src={check} alt="" />
                                </div>
                                <div className="box">
                                    <h4 className='box-t'>Интересные и познавательные факты <br />
                                        о мультипликации</h4>
                                    <p className='text-p'>Что такое мультипликация? Когда и как был снят первый <br /> мультфильм? Какие техники мультипликации существуют? <br />
                                        И мнногое-многое другое.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="dar">
                                <div className="ll">
                                    <img className='check' src={check} alt="" />
                                </div>
                                <div className="box">
                                    <h4 className='box-t'>Дети пробуют новые виды творчества</h4>
                                    <p className='text-p'>Придумывание сюжета, изготовление декораций <br />
                                        и персонажей, работа с техникой, съемка на <br /> мульт-станке и озвучка может открыть таланты <br /> вашего ребенка, о которых Вы даже подозревали.</p>
                                </div>
                            </div>
                            <div className="dar">
                                <div className="ll">
                                    <img className='check' src={check} alt="" />
                                </div>
                                <div className="box">
                                    <h4 className='box-t'>Мастер-классы ещё и очень полезны <br />
                                        для детей</h4>
                                    <p className='text-p'>На мастер-классе дети делают мультфильмы <br />
                                        не в компьютере, а в реальной жизни. <br /> Формируются социальные навыки, развивается <br /> воображение, а также навыки коммуникации <br /> и совместного творчества с другими детьми.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
