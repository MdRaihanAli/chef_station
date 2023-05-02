import React from 'react'
import { FaArrowAltCircleRight, FaBeer } from 'react-icons/fa';

function LeftHero() {
  return (
    <div className='mt-lg-5 p pt-lg-5 p-2'>
        <h1 className='mt-md-5 pt-md-5'> <span className="text-primary">A chef </span> staffing agency that provides</h1>
        <p>ChefWorks: A chef staffing agency that provides temporary and permanent staffing solutions to restaurants, hotels, and other food service establishments. They carefully match chefs to each client based on their unique needs and preferences.</p>
        <button className='btn btn-primary'>Contact With Us  <FaArrowAltCircleRight /> </button>
    </div>
    
  )
}

export default LeftHero