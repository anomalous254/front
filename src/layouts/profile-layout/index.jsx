import React from 'react';
import './index.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa6';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useUserData } from '../../hooks';

export const ProfileLayout = () => {
    const { user, languages, ranking } = useUserData();
    const back_path = useLocation();
    return (
        <div className="profile">
            <div className="upper-section">
                <div className="nav-bar">
                    <Link to=".." relative="path">
                        <MdKeyboardArrowLeft className="profile-icon arrow" />
                    </Link>
                    <Link>
                        <FaRegBell className="profile-icon " />
                    </Link>
                </div>
                <div className="profile-title">
                    <h3 className="title-intro">My</h3>
                    <h3>Profile</h3>
                </div>
            </div>
            <div className="lower-section">
                <div className="profile-info">
                    <img src={user?.profile_url} alt="image" />
                    <p>
                        {user?.first_name} {user?.last_name}
                    </p>
                </div>
                <div className="profile-links">
                    <NavLink>Personal info</NavLink>
                    <NavLink to="scores">Scores</NavLink>
                </div>
                <div className="profile-outlet">
                    <Outlet
                        context={{
                            data: user,
                            lang: languages,
                            ranks: ranking,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
