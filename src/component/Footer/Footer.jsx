import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => <footer className="page-footer bg-dark text-white font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">
                    Chef Station
                </h5>
                <p>ChefWorks: A chef staffing agency that provides temporary and permanent staffing solutions to restaurants, hotels, and other food service establishments. They carefully match chefs to each client based on their unique needs and preferences.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase border-bottom">Important Link</h5>
                <ul className="list-unstyled text-start  ">
                    <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/login'>Login</NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/rejister'>Rejister</NavLink></li>

                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase border-bottom">Select Staf</h5>
                <ul className="list-unstyled text-start ">
                    <li><NavLink className='nav-link' to='/'>Spaghetti Carbonara</NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/login'>Chicken Alfredo</NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/rejister'>Spaghetti Carbonara</NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/rejister'>Chicken Alfredo</NavLink></li>

                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> www.chefstation.com</a>
    </div>

</footer>

export default Footer