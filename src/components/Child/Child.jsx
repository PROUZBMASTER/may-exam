import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Child.css"
import child from './img/tall.svg'




export const ChildPage = () => {
    return (
        <>
            <div className="child">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='vash'>Ваш ребенок встретится с любимыми героями</h1>
                            <p className='long'>Динозавры, Пираты, LEGO, Гарри Поттер, Монстры на каникулах, Черепашки ниндзя, Мимимишки, Роботы, Миньоны, <br /> Космос, Щенячий патруль, Ледибаг, Супер-кот, Майнкрафт и многие-многие другие!
                            </p>
                            <img className='chi' src={child} alt="" />
                            <div className="hard">
                                <p className="tex">Запишитесь на мастер-класс <br />
                                    с любилыми героями вашего ребенка</p>
                                    <button className='btn8'>Записаться заранее</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
