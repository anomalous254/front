import React from 'react';
import './index.scss';
import { useReviews } from '../../hooks';
import { FcLike } from 'react-icons/fc';
import { AiFillLike } from 'react-icons/ai';

export const ReviewList = () => {
    const reviews = useReviews() || [];
    return (
        <div className="reviews">
            {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
            ))}
        </div>
    );
};

const ReviewCard = ({ name, comment, likes, loves, stars, image }) => {
    return (
        <div className="review-card">
            <div className="profile">
                <img src={image} alt="icon" />
                <div>
                    <p>{name}</p>
                </div>
            </div>
            <div className="comment">
                <p>{comment}</p>
            </div>
            <div className="review-icons">
                <small >
                    <FcLike onClick={() => loves + 1 } className="r-icon" /> {loves}
                </small>
                <small>
                    <AiFillLike className="r-icon" />
                    {likes}
                </small>
            </div>
        </div>
    );
};
