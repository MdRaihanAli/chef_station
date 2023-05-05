import React from "react"
import { NavLink } from "react-router-dom"
import { FaBan, FaFacebook, FaGithub, FaGoogle, FaHome, FaUser, FaUserEdit, FaWhatsapp } from 'react-icons/fa';

const Footer = () => <footer className="page-footer bg-dark text-white font-small blue pt-4">
    <div className="container text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">
                    Chef Station
                </h5>
                <p className="text-muted">ChefWorks: A chef staffing agency that provides temporary and permanent staffing solutions to restaurants, hotels, and other food service establishments. They carefully match chefs to each client based on their unique needs and preferences.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase border-bottom">Menu</h5>
                <ul className="list-unstyled text-start  ">
                    <li><NavLink className='nav-link' to='/'> <FaHome></FaHome> <span className="ms-2 text-muted">Home</span> </NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/login'> <FaUser></FaUser> <span className="ms-2 text-muted">Login</span> </NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/rejister'> <FaUserEdit></FaUserEdit> <span className="ms-2 text-muted">Rejister</span> </NavLink></li>

                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase border-bottom">Contact with us</h5>
                <ul className="list-unstyled text-start ">
                    <li><NavLink className='nav-link' to='/'> <FaFacebook></FaFacebook> <span className="ms-2 text-muted">Facebook</span> </NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/login'> <FaGithub></FaGithub> <span className="ms-2 text-muted">Github</span> </NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/rejister'><FaWhatsapp></FaWhatsapp> <span className="ms-2 text-muted">Whatsspp</span></NavLink></li>
                    <li><NavLink className='nav-link' to='/recipies/rejister'> <FaGoogle></FaGoogle> <span className="ms-2 text-muted">Google</span> </NavLink></li>

                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> www.chefstation.com</a>
    </div>

</footer>

export default Footer