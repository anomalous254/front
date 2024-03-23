import React from 'react';
import './index.scss';
import bot from '../../assets/avatar/bot.png';
import logo from '../../assets/img/lulu-white-logo.png';
import { Link } from 'react-router-dom';

export const LoadingPage = () => {
    return (
        <div className="splash-screen">
            <img src={bot} alt="logo" />
            <div className="left-section">
                <Link>Start Game</Link>
                <Link>Words/Phrases</Link>
                <Link>Tribe Reviews</Link>
                <Link>Leadership Board</Link>
                <Link to="https://lulugame.vercel.app/">Quit</Link>
            </div>
        </div>
    );
};
