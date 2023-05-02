import React  from 'react'
// import {  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar  variant="dark">
        <Container>
          <Navbar.Brand href="/">ChefWorks</Navbar.Brand>
          <Nav className="ms-auto">
       
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/recipies/login'>Login</NavLink>
            <NavLink className='nav-link' to='/recipies/rejister'>Rejister</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header