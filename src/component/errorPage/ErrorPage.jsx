import React from 'react'
import { FaBan } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import bg_img from '../../assets/err.webp'
import Header from '../Header/Header';

function ErrorPage() {



  return (
    <div fluid
      style={{
        backgroundImage: `url(${bg_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
      className='text-center '>
      <div className='bg-dark'>
        <Header></Header>
      </div>
      {/* <h1 className='display-5'> <FaBan /> </h1>
        
        <Link to='/'> <button className='btn btn-primary'>Goto Home</button></Link> */}
    </div>
  )
}

export default ErrorPage