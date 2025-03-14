import { useState } from 'react';
import React from 'react';
import './Navbar.css';
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    const removeNavbar = () => {
        setActive('navBar');
    };

    return (
        <section className='navBarSection'>
            <header className="header flex">
                <div className="LogoDiv">
                    <a href="#" className="logo">
                        <h1><MdTravelExplore className="icon" />Travel.</h1>
                    </a>
                </div>

                {/* Navbar con control de visibilidad */}
                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem"><a href="#" className="navLink">Home</a></li>
                        <li className="navItem"><a href="#" className="navLink">Packages</a></li>
                        <li className="navItem"><a href="#" className="navLink">Shop</a></li>
                        <li className="navItem"><a href="#" className="navLink">About</a></li>
                        <li className="navItem"><a href="#" className="navLink">Pages</a></li>
                        <li className="navItem"><a href="#" className="navLink">News</a></li>
                        <li className="navItem"><a href="#" className="navLink">Contact</a></li>
                    
                     <button className='btn'>
                        <a href="#">BOOK NOW</a>
                    </button>

                    </ul>

                   
                    {/* Botón para cerrar el navbar */}
                    <div onClick={removeNavbar} className="closeNavBar">
                        <IoIosCloseCircleOutline className="icon" />
                    </div>
                </div>

                {/* Botón para abrir el navbar */}
                <div onClick={showNav} className="toggleNavBar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;

                 