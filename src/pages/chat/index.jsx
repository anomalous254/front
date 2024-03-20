import React from 'react';
import './index.scss';
import { useLocation } from 'react-router-dom';
import botimg from '../../assets/avatar/bot.png';

export const Game = () => {
    const data = useLocation();
    const { icon, language } = data?.state || null;
    console.log(data.state);
    return (
        <div className="greeting">
            <img src={botimg} alt="bot" />
            <p>
                <span>
                    Welcome to Lulu!, I'm your language learning assistant
                </span>
                <br />
                i'm here to help you learn a language quickly and effectively.
                Lets play the <span>{language}</span> game :-)
            </p>
        </div>
    );
};
