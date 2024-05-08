import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from "../assests/logo.png";


function Navbar() {
    return (
        <div>
            <nav className='navbar-container'>
                <Link to="/flights"><img className='logo-img' src={logo} /></Link>
                <ul className='navBar'>
                    <Link to="/flights" className='flights'>
                        {/* <img src={Download} className='header-img'/> */}
                        <li>Flights</li>
                    </Link>
                    <Link to="/hotels" className='hotels'>
                        <li>Hotels</li>
                    </Link>
                    <Link to="/trains" className='trains'>
                        <li>Trains</li>
                    </Link>
                    <Link to="/cabs" className='cabs'>
                        <li>Cabs</li>
                    </Link>
                    <Link to="/bus" className='bus'>
                        <li>Bus</li>
                    </Link>
                    <Link to="/holidays" className='holidays'>
                        <li>Holidays</li>
                    </Link>
                    <Link to="/forex" className='forex'>
                        <li>Forex</li>
                    </Link>

                </ul>

                <ul className='nav-linkss'>
                    <button>LOGIN</button>
                    <p className='dash'>/</p>
                    <button >SIGNUP</button>

                </ul>
            </nav >

        </div>








    )
}

export default Navbar;