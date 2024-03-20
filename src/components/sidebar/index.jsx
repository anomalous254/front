import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
    return (
        <div className="sidebar">
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Start Game
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
                to="quit"
                className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                }
            >
                Quit
            </NavLink>
        </div>
    );
};
