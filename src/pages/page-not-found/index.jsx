import React from 'react';
import './index.scss';
import bot from '../../assets/avatar/bot.png';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <div className="contents">
                <img src={bot} alt="bot" />
                <div>
                    <h1>404</h1>
                    <h2>Oopss! page not found</h2>
                    <Link to='/dashboard'>Return to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};
