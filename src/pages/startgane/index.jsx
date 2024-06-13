import React from 'react';
import './index.scss';
import { useAvatar } from '../../hooks';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../features';
import { VscDebugStart } from 'react-icons/vsc';
import { useUserData } from '../../hooks';

const languges = ['Yoruba', 'Swahili', 'Hausa', 'Igbo'];
export const StartGame = () => {
    const { user } = useUserData();
    const userInfo = useSelector(selectUserInfo);
    const avatar = useAvatar();
    const [selectedLng, setSelectedLng] = React.useState('');
    const [selectedAvatar, setSelectedAvatar] = React.useState('');
    const [activeButton, setActiveButton] = React.useState(null);

    const btnClicked = (val) => {
        setActiveButton(val);
        setSelectedLng(val);
    };
    return (
        <div className="start-game">
            <h3>Hello there, {user?.first_name }</h3>
            <div className="select-lng">
                <h4>Select language</h4>
                <div className="lang-btn">
                    {languges.map((lang) => (
                        <button
                            onClick={() => btnClicked(lang)}
                            key={lang}
                            className={
                                activeButton === lang
                                    ? 'active'
                                    : 'custom-button'
                            }
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </div>

            <div className="select-avatar">
                <h4>Select avatar</h4>
                <div className="avatar-btn">
                    {avatar.map((icon) => (
                        <button
                            onClick={() => setSelectedAvatar(icon)}
                            key={icon}
                        >
                            <img src={icon} alt="avatar" />
                        </button>
                    ))}
                </div>
            </div>

            {selectedLng && selectedAvatar ? (
                <div className="selected">
                    <h4>Your Selection</h4>
                    <div className="my-selection">
                        <img src={selectedAvatar} alt="avatar" />
                        <h5>
                            <span>{selectedLng}</span>
                        </h5>
                    </div>
                    <div className="start-btn">
                        {selectedAvatar && selectedLng ? (
                            <Link
                                to="game"
                                state={{
                                    icon: selectedAvatar,
                                    language: selectedLng,
                                }}
                            >
                                <button>Start</button>
                            </Link>
                        ) : null}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
