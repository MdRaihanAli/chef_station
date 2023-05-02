import React from 'react'
import Header from '../component/Header/Header'
import { Outlet } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import LeftHero from '../component/Hero/LeftHero'
import Hero from '../component/Hero/Hero'
import Chef from '../component/Chef/Chef'

function Main() {
    const bg_img = 'https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4='

    return (
        <div>
            <Container
                fluid
                style={{
                    backgroundImage: `url(${bg_img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            >
                <Header></Header>
                <Container className='text-light'>
                    <Row className=''>
                        <Col md="6">
                            <Hero />
                        </Col>
                        <Col md="6">
                            <LeftHero></LeftHero>
                        </Col>
                    </Row>

                </Container>
            </Container>

            <div>
                <Container>
                    <Row>
                        <Chef></Chef>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Main