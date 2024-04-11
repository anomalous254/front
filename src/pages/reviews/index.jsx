import React from 'react';
import './index.scss';
import { useReviews } from '../../hooks';
import { FcLike } from 'react-icons/fc';
import { AiFillLike } from 'react-icons/ai';
import { IoMdStar } from 'react-icons/io';
import { useStarRenderer } from '../../hooks';
import { WriteReviews } from '../../components';

export const ReviewList = () => {
    const reviews = useReviews() || [];
    const [toggleWrite, setToggleWrite] = React.useState(false);
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
                <div className="write__review__container">
                    <button onClick={() => setToggleWrite(!toggleWrite)}>
                        Write
                    </button>
                    {toggleWrite && <WriteReviews />}
                </div>
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>
        </div>
    );
};

const ReviewCard = ({ name, comment, likes, loves, stars, image }) => {
    const [like, setLike] = React.useState(likes);
    const [love, setLove] = React.useState(loves);
    const stars_count = useStarRenderer(stars);

    const setReaction = (reaction) => {
        if (reaction === 'like') {
            setLike(likes + 1);
        } else {
            setLove(loves + 1);
        }
    };

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
                    <FcLike
                        onClick={() => setReaction('love')}
                        className="r-icon"
                    />{' '}
                    {love}
                </small>
                <small>
                    <AiFillLike
                        onClick={() => setReaction('like')}
                        className="r-icon"
                    />
                    {like}
                </small>
            </div>
        </div>
    );
};
