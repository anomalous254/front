import React from 'react';
import './index.scss';
import { useOutletContext } from 'react-router-dom';

export const ProfileScores = () => {
    const { lang, ranks } = useOutletContext();

    return (
        <div className="profile-scores">
            <div className="ranking">
                <p>
                    Total points <span>{ranks?.total_points}</span>
                </p>
                <p>
                    Rank <span>#{ranks?.rank}</span>
                </p>
            </div>

            <h3>Points</h3>

            <div className="languges-scores">
                {lang?.map((score) => (
                    <LangaugeScoreCard key={score.language} {...score} />
                ))}
            </div>
        </div>
    );
};

const LangaugeScoreCard = ({ language, points }) => {
    return (
        <div className="score-card">
            <p>{language.charAt(0).toUpperCase() + language.slice(1)}</p>
            <small>{points}</small>
        </div>
    );
};
