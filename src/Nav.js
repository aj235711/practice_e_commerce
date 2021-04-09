import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="zone blue steady">
            <ul className="main-nav">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/helpme">
                    <li>Help Me</li>
                </Link>
                <li>Join us</li>
                <li className="push">Contact us</li>
            </ul>
        </nav>  
    )
}

export default Nav;