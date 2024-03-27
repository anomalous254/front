import React from 'react';
import './index.scss';
import { useOutletContext } from 'react-router-dom';

export const ProfileScores = () => {
    const { data: profileData } = useOutletContext();
    const languageScores = profileData.languages_scores || [];

    return (
        <div className="profile-scores">
            <div className="ranking">
                <p>
                    Total points <span>{profileData.points}</span>
                </p>
                <p>
                    Rank <span>#{profileData.rank}</span>
                </p>
            </div>

            <h3>Points</h3>

            <div className="languges-scores">
              
              {languageScores.map(score => <LangaugeScoreCard key={score.name} {...score} />)}
            </div>
        </div>
    );
};

const LangaugeScoreCard = ({ name, points }) => {
    return (
        <div className='score-card'>
            <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
            <small>{points}</small>
        </div>
    );
};
