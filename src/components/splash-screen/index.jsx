import React from 'react';
import './index.scss';
import bot from '../../assets/avatar/bot.png';
import logo from '../../assets/img/lulu-white-logo.png';
import { Link } from 'react-router-dom';
import { GoIssueClosed } from 'react-icons/go';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const LoadingPage = () => {
    const [quit, setQuit] = React.useState(false);
    return (
        <div className="splash-screen">
            <img src={bot} alt="logo" />
            <div className="left-section">
                <Link to="/dashboard">Start Game</Link>
                <Link to="/dashboard/words">Words/Phrases</Link>
                <Link to="/dashboard/reviews">Tribe Reviews</Link>
                <Link to="/dashboard/leaderboard">Leadership Board</Link>
                <Link onClick={() => setQuit(true)}>Quit</Link>
            </div>

            {quit ? (
                <div className="quit">
                    <div className="prompt">
                        <img src={bot} alt="logo" className="quit-bot" />
                        <p>Do you want to Quit this game ?</p>
                        <div className="quit-btn">
                            <Link to="https://lulugame.vercel.app/">
                                <GoIssueClosed className="quit-link" />
                            </Link>
                            <button onClick={() => setQuit(!quit)}>
                                <IoIosCloseCircleOutline className="close-prompt" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
