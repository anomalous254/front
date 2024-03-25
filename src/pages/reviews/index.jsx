import React from 'react';
import './index.scss';
import { useReviews } from '../../hooks';
import { FcLike } from 'react-icons/fc';
import { AiFillLike } from 'react-icons/ai';
import { IoMdStar } from 'react-icons/io';
import { useStarRenderer } from '../../hooks';

export const ReviewList = () => {
    const reviews = useReviews() || [];

    const [avarageRate, setAvarageRate] = React.useState(0);
    React.useEffect(() => {
        let total = 0;
        let count = 0;
        const avarage = reviews.map((num) => {
            return num.stars;
        });

        avarage.forEach((num) => {
            count += 1;
            total += num;
        });
        setAvarageRate(total / count);
    }, []);
    const stars_avarage = useStarRenderer(avarageRate);
    return (
        <div>
            <div className="overall_review">
                <div className="avarage-rating">
                    
                    <h2>
                        Avarage Rating <span>{avarageRate}</span>
                    </h2>
                    <div className="stars-avarage">
                        {stars_avarage.map((_, index) => (
                            <IoMdStar key={index} className="avarage-star" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="reviews">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>
        </div>
    );
};

const ReviewCard = ({ name, comment, likes, loves, stars, image }) => {
    const stars_count = useStarRenderer(stars);
    return (
        <div className="review-card">
            <div className="profile">
                <img src={image} alt="icon" />
                <div>
                    <p>{name}</p>
                    <div>
                        {stars_count.map((_, index) => (
                            <IoMdStar key={index} className="star-icon" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="comment">
                <p>{comment}</p>
            </div>
            <div className="review-icons">
                <small>
                    <FcLike onClick={() => loves + 1} className="r-icon" />{' '}
                    {loves}
                </small>
                <small>
                    <AiFillLike className="r-icon" />
                    {likes}
                </small>
            </div>
        </div>
    );
};
