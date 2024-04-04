import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutUserInfo } from '../../features';

const data = {
    username: '',
    first_name: '',
    last_name: '',
    contact: '',
    country: '',
    email: '',
    languages_scores: [
        { name: 'swahili', points: 0 },
        { name: 'igbo', points: 0 },
        { name: 'yoruba', points: 0 },
        { name: 'hausa', points: 0 },
    ],
    rank: '0',
    points: '0',
    image: 'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
};

export const SideBar = () => {
    const dispatch = useDispatch();

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
                Logout
            </NavLink>
        </div>
    );
};
