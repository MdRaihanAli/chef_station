import React from 'react'
import Header from '../component/Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function Recipes() {
    return (
        <Container fluid >
            <div className='bg-dark text-primary'>
                <Header></Header>
            </div>
            <Container className=''>
                <Outlet></Outlet>
            </Container>
        </Container>
    )
}

export default Recipes