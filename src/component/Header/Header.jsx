import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

function Header() {
  const { user, userLogOut } = useContext(AuthContext)
  console.log(user?.photoURL);

  const logOut = () => {
    userLogOut()
  }
  useTitle('Header')
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className='fw-bold' href="/">Chef Station</Navbar.Brand>
          <Nav className="ms-auto">

            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/recipies/blog'>Blog</NavLink>


            {
              user ? "" : <>
                <NavLink className='nav-link' to='/recipies/login'>Login</NavLink>
                <NavLink className='nav-link' to='/recipies/rejister'>Rejister</NavLink>
              </>
            }

            {
              user && <img title={user?.displayName} width='40' className='rounded-circle' src={`${user?.photoURL}`} alt="" />
            }
              {
                user? <button onClick={logOut} className='mx-3 btn btn-outline-light' >Logout </button>:""
              }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header