import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Navbar.css"
import logo from './img/logo.svg'
import adres from './img/adres.svg'
import phone from './img/telefon.svg'
import hand from './img/hands.svg'

export const NavbarPage = () => {
  return (
    <>
      <header>
        <nav>
          <Container>
            <Row className='justify-content-space-between'>
              <Col lg={3}>
                <img className='lo' src={logo} alt="" />
              </Col>
              <Col lg={3}>
                <img src={adres} alt="" />
              </Col>
              <Col lg={3}>
                <img src={phone} alt="" />
              </Col>
              <Col lg={3}>
                <button className='btn1' type="submit">Заказать звонок</button>
              </Col>
            </Row>
          </Container>
        </nav>
        <div className='sec1'>
          <Container>
            <Row className='justify-content-space-between'>
              <Col lg={6}>
                <p className='uvlek'>Увлекательные <br />
                  мастер-классы для детей</p>
                <h1 className='mul'>Мультфильмы <br />
                  своими руками</h1>
                  <h6 className='kaj'>Каждую неделю!</h6>
                  <button className='btn2'>Узнайте расписание</button>
              </Col>
              <Col lg={5}>
              <img className='hand' src={hand} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}
