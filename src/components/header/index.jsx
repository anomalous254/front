import React from 'react';
import logo from '../../assets/img/logo.png';
import { FaGlobe } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import './index.scss';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa6';
import { FaInfo } from 'react-icons/fa';
import { IoGitBranch } from 'react-icons/io5';
import privacyPolicy from '../../assets/docs/lulu-pp.pdf';

const user_image =
    'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg';

export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <React.Fragment>
            <header className="header">
                <Link to="/" className="logo-link">
                    <img src={logo} />
                </Link>
                <div className="header-link">
                    <Link
                        to="https://lulugame.vercel.app/"
                        target="_blank"
                        className="landing-page"
                    >
                        <FaGlobe />
                    </Link>
                    <Link
                        to="profile"
                        className={user_image ? 'img-link' : null}
                    >
                        {user_image ? (
                            <img
                                src={user_image}
                                className="profile-image-link"
                                alt="image"
                            />
                        ) : (
                            <FaUser />
                        )}
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

                {showMenu ? (
                    <div className="menu-container">
                        <div
                            className={
                                showMenu ? 'show-menu active ' : `show-menu`
                            }
                        >
                            <div className="menu-sm-screens">
                                <NavLink
                                    onClick={() => setShowMenu(!showMenu)}
                                    to="/"
                                >
                                    Start
                                </NavLink>
                                <NavLink
                                    onClick={() => setShowMenu(!showMenu)}
                                    to="words?language=yoruba"
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
                                <div className="footer-sm-screen">
                                    <div className="footer-sm-link">
                                        <Link
                                            to={privacyPolicy}
                                            target="_blank"
                                        >
                                            <FaBookOpen className="footer-sm-icon" />
                                        </Link>
                                        <p>Privacy policy</p>
                                    </div>
                                    <div className="footer-sm-link">
                                        <Link>
                                            <IoGitBranch className="footer-sm-icon" />
                                        </Link>
                                        <p>version 1.0.1</p>
                                    </div>
                                    <div className="footer-sm-link">
                                        <Link>
                                            <FaInfo className="footer-sm-icon" />
                                        </Link>
                                        <p>Read more</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </header>
        </React.Fragment>
    );
};
