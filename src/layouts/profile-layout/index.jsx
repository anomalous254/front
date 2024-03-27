import React from 'react';
import './index.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa6';
import { Link, NavLink, Outlet } from 'react-router-dom';

const data = {
    name: 'Kwame Nkuruma',
    contact: '+234-123-456-789',
    country: 'Nigeria',
    email: 'johndoe@example.com',
    languages_scores: [
        { name: 'swahili', points: 200 },
        { name: 'igbo', points: 90 },
        { name: 'yoruba', points: 320 },
        { name: 'hausa', points: 300 },
    ],
    rank: '56',
    points: '321',
    image: 'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
};

export const ProfileLayout = () => {
    return (
        <div className="profile">
            <div className="upper-section">
                <div className="nav-bar">
                    <Link to='..' relative='path'>
                        <MdKeyboardArrowLeft className="profile-icon arrow" />
                    </Link>
                    <Link>
                        <FaRegBell className="profile-icon " />
                    </Link>
                </div>
                <div className="profile-title">
                    <h3 className="title-intro">My</h3>
                    <h3>Profile</h3>
                </div>
            </div>
            <div className="lower-section">
                <div className="profile-info">
                    <img src={data.image} alt="image" />
                    <p>{data.name}</p>
                </div>
                <div className="profile-links">
                    <NavLink>Personal info</NavLink>
                    <NavLink to='scores'>Scores</NavLink>
                </div>
                <div className="profile-outlet">
                    <Outlet context={{ data: data }} />
                </div>
            </div>
        </div>
    );
};
