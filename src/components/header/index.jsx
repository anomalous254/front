import React from 'react';
import logo from '../../assets/img/logo.png';
import { FaGlobe } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import './index.scss';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';

export const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <img src={logo} />
            </Link>
            <div className="header-link">
                <Link className="landing-page">
                    <FaGlobe />
                </Link>
                <Link>
                    <FaUser />
                </Link>
                <button className="toggle-btn">
                    <RiMenu3Fill />
                </button>
            </div>
        </header>
    );
};
