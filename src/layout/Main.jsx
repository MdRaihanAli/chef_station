import React from 'react'
import Header from '../component/Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import LeftHero from '../component/Hero/LeftHero'
import Hero from '../component/Hero/Hero'
import Chef from '../component/Chef/Chef'
import Footer from '../component/Footer/Footer'
import Slider from '../component/slider/Slider'
import Reting from '../component/Reting/Reting'
import useTitle from '../hooks/useTitle'

function Main() {
    const bg_img = 'https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4='
    useTitle('Home')
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

            <div >
                <Container>
                    <Chef></Chef>
                </Container>
            </div>
            <div>
                <Container>
                    <Slider></Slider>
                </Container>
            </div>
            <div style={{backgroundColor:'#CFE2FF'}}>
                <Container>
                    <Reting></Reting>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Main