import React from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const languges = ['yoruba', 'swahili', 'hausa', 'igbo'];

export const WordsPageLayout = () => {
    return (
        <div>
            <WordsHeader />
            <Outlet />
        </div>
    );
};

const WordsHeader = () => {
    
    return (
        <div className="words-header">
            {languges.map((lang) => (
                <NavLink
                    to={`?language=${lang}`}
                    className={({ isActive }) =>
                        isActive ? 'word-link active' : 'word-link'
                    }
                >
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </NavLink>
            ))}
        </div>
    );
};
