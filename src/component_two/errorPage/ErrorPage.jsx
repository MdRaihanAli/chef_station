import React from 'react'
import { FaBan } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function ErrorPage() {
  return (
    <div className='text-center py-5'>
        <h1 className='display-5'> <FaBan /> </h1>
        <h2>This Pase Is Not Found</h2>
        <Link to='/'>Goto Home</Link>
    </div>
  )
}

export default ErrorPage