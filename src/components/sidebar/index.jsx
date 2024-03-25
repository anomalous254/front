import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
    return (
        <div className="sidebar">
             <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Play
            </NavLink>
            <NavLink
                to="words?language=hausa"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Words
            </NavLink>
            <NavLink
                to="reviews"
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
                to="/"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Quit
            </NavLink>
        </div>
    );
};
