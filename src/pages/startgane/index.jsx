import React from 'react';
import './index.scss';

const languges = ['Yoruba', 'Swahili', 'Hausa', 'Igbo'];
const avater = [
    'Avatar-1',
    'Avatar-2',
    'Avatar-3',
    'Avatar-4',
    'Avatar-5',
    'Avatar-6',
];

export const StartGame = () => {
    const [selectedLng, setSelectedLng] = React.useState('');
    const [selectedAvatar, setSelectedAvatar] = React.useState('');
    const [activeButton, setActiveButton] = React.useState(null);

    const btnClicked = (val) => {
        setActiveButton(val);
        setSelectedLng(val);
    };
    return (
        <div className="start-game">
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
                    {avater.map((icon) => (
                        <button
                            onClick={() => setSelectedAvatar(icon)}
                            key={icon}
                        >
                            {icon}
                        </button>
                    ))}
                </div>
            </div>

            <div className="selected">
                <h4>Your Selection</h4>
                <div>
                    <h5>Language: {selectedLng}</h5>
                    <h5>Avatar: {selectedAvatar}</h5>
                </div>
            </div>
        </div>
    );
};
