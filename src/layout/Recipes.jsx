import React from 'react'
import Header from '../component/Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'
import LeftHero from '../component/Hero/LeftHero'

function Recipes() {
    return (
        <Container fluid >
            <div className='bg-dark text-primary'>
                <Header></Header>
            </div>
            <Container className=''>
                <Row className=''>
                   
                        <Outlet></Outlet>
                    
                    
                </Row>

            </Container>
            <Footer></Footer>
        </Container>
    )
}

export default Recipes