import React from 'react';
import { useAvatar, useLeaderboardData } from '../../hooks';
import './index.scss';

export const Leaderboard = () => {
    const leaderboard = useLeaderboardData();
    const newData = leaderboard.filter((data) => data.position > 3);
    const topThree = leaderboard.filter((data) => data.position <= 3);
    return (
        <div>
            <div className="top-three">
                {topThree.map((leader) => (
                    <TopThreeCard key={leader.position} {...leader} />
                ))}
            </div>
            <div className="leaderboard-list">
                {newData.map((leader) => (
                    <LeaderboardCard key={leader.position} {...leader} />
                ))}
            </div>
        </div>
    );
};

const LeaderboardCard = ({ name, position, image_url, points }) => {
    return (
        <div className="leaderboard-card">
            <small>{position}</small>
            <div className="card-profile">
                <div className="card-info">
                    <img src={image_url} alt="image" />
                    <small>{name}</small>
                </div>
                <small>{points}</small>
            </div>
        </div>
    );
};

const TopThreeCard = ({ name, position, image_url, points }) => {
    return (
        <div className="top-three-card">
            <div className="top-three-card-profile">
                <div className="top-three-card-info">
                    <img src={image_url} alt="image" />
                    <small>{name}</small>
                    <small className='postion'>{position}</small>
                </div>
                <small>{points}</small>
            </div>
        </div>
    );
};
