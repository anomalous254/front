import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './index.scss';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';

export const ProfileInfo = () => {
    const { data: profileData } = useOutletContext();

    return (
        <div className="profile-information">
            <div className="info">
                <div className="info-profile-container">
                    <MdLocationPin className="info-icon" />
                    <small>Location</small>
                </div>
                <p>{profileData.country}</p>
            </div>
            <div className="info">
            <div className="info-profile-container">
                    <FaMobileAlt className="info-icon" />
                    <small>Mobile</small>
                </div>
                <p>{profileData.contact}</p>
            </div>
            <div className="info">
            <div className="info-profile-container">
                    <MdEmail className="info-icon" />
                    <small>Email</small>
                </div>
                <p>{profileData.email}</p>
            </div>
        </div>
    );
};
