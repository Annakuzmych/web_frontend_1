import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import image from '../icon.webp';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar navbar-expand-lg navbar-light bg-info-subtle bg-gradient text-info-emphasis p-4">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <Image height={35} width={40} src={image} alt="Mental Logo" className="me-2"/>
                    <span className="d-none d-lg-inline">Emotional Intel</span>
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registration">Registration</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
