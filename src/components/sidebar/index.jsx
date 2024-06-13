import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { logOutUserInfo } from '../../features';
import { FaCirclePlay } from 'react-icons/fa6';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { FaLanguage } from 'react-icons/fa';
import { MdOutlineRateReview, MdLeaderboard } from 'react-icons/md';
import { logoutUser } from '../../services/logout';
import { toast } from 'react-toastify';

export const SideBar = () => {
    const logout = async () => {
        const response = await logoutUser();
        toast.success('succesfully logged out! ', {
            theme: 'light',
            autoClose: 3000,
        });
    };
    return (
        <div className="sidebar">
            <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                <FaCirclePlay className="sidebar-icon" />
                Play
            </NavLink>
            <NavLink
                to="words?language=hausa"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                <FaLanguage className="sidebar-icon" />
                Words
            </NavLink>
            <NavLink
                to="reviews"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                <MdOutlineRateReview className="sidebar-icon" />
                Tribe reviews
            </NavLink>
            <NavLink
                to="leaderboard"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                <MdLeaderboard className="sidebar-icon" />
                Leaderboard
            </NavLink>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
                onClick={logout}
            >
                <RiLogoutBoxLine className="sidebar-icon" />
                Logout
            </NavLink>
        </div>
    );
};
