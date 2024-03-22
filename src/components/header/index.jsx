import React from 'react';
import logo from '../../assets/img/logo.png';
import { FaGlobe } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import './index.scss';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdCloseCircleOutline } from 'react-icons/io';
export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <React.Fragment>
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
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="toggle-btn"
                    >
                        {showMenu ? (
                            <IoMdCloseCircleOutline className="menu-icon close" />
                        ) : (
                            <RiMenu3Fill className="menu-icon" />
                        )}
                    </button>
                </div>
            </header>
            <div className={showMenu ? 'show-menu ' : 'menu-container'}>
                <h3>Menu</h3>
            </div>
        </React.Fragment>
    );
};
