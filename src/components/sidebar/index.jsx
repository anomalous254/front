import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
    return (
        <div className="sidebar">
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Start
            </NavLink>
            <NavLink
                to="words"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Words
            </NavLink>
            <NavLink
                to="review"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Tribe reviews
            </NavLink>
            <NavLink
                to="leaderboard"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Leaderboard
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Quit
            </NavLink>
        </div>
    );
};
