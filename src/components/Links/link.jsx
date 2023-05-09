import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Link.css"
import far from './img/children.svg'
import fad from './img/student.svg'





export const LinkPage = () => {
    return (
        <>
            <div className="link">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='pos'>Посмотрите мультифильмы с мастер-классов</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <iframe className='vid' src="https://www.youtube.com/embed/OTUg_4TvCWY" title="Five Little Ducks | Childrens Song For Kids | Nursery Rhyme For Baby by Farmees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                        <Col lg={3}>
                            <iframe className='vidi' src="https://www.youtube.com/embed/OTUg_4TvCWY" title="Five Little Ducks | Childrens Song For Kids | Nursery Rhyme For Baby by Farmees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe className='vidi va' src="https://www.youtube.com/embed/OTUg_4TvCWY" title="Five Little Ducks | Childrens Song For Kids | Nursery Rhyme For Baby by Farmees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                        <Col lg={3}>
                            <iframe className='vidi' src="https://www.youtube.com/embed/OTUg_4TvCWY" title="Five Little Ducks | Childrens Song For Kids | Nursery Rhyme For Baby by Farmees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe className='vidi va' src="https://www.youtube.com/embed/OTUg_4TvCWY" title="Five Little Ducks | Childrens Song For Kids | Nursery Rhyme For Baby by Farmees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <h1 className='eshe'>А ещё у нас проходят...</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-space-between'>
                        <Col lg={4}>
                            <div className="fard">
                                <img className='far' src={far} alt="" />
                                <h5 className='fard-h'>Праздничные <br />
                                    мастер-классы</h5>
                                <p className="fard_p">Игровая программа, <br />
                                    приуроченная к календарным <br />
                                    праздникам: Новому году, <br />
                                    23 февраля, Хэллоуину и другим...</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="fard">
                                <img className='far' src={fad} alt="" />
                                <h5 className='fard-h'>Тематические мастер- <br />
                                    классы с квестами</h5>
                                <p className="fard_p">“Ночь в Мультистории”, <br />
                                    “Супергеройская вечеринка”, <br />
                                    “Время сладкоежек” и другие. <br />
                                    Веселимся и снимаем мультики!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="fard">
                                <img className='far' src={far} alt="" />
                                <h5 className='fard-h'>Головокружительный <br />
                                    мульт-марафон</h5>
                                <p className="fard_p">Целая неделя тематических <br />
                                    мастер-классов,  где дети <br />
                                    превращаются в настоящих <br />
                                    мультийцев</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-space-between'>
                        <Col lg={8}>
                            <h1 className="zap">Следите за Афишей! <br /> Узнайте о предстоящих мероприятиях и забронируйте участие заранее</h1>
                        </Col>
                        <Col lg={3}>
                            <button className='btn9'>Узнать расписание</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
