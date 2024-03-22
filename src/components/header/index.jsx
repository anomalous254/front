import React from 'react';
import logo from '../../assets/img/logo.png';
import { FaGlobe } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import './index.scss';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

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

                <div
                    className={
                        showMenu
                            ? 'show-menu active '
                            : `show-menu`
                    }
                >
                    <div className="menu-sm-screens">
                        <NavLink onClick={() => setShowMenu(!showMenu)} to="/">
                            Start
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(!showMenu)}
                            to="words"
                        >
                            Words
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(!showMenu)}
                            to="reviews"
                        >
                            Tribe reviews
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(!showMenu)}
                            to="leaderboard"
                        >
                            Leaderboard
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(!showMenu)}
                            to="/login"
                        >
                            Quit
                        </NavLink>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};
