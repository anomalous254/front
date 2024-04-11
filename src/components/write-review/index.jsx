import React from 'react';
import './index.scss';

export const WriteReviews = () => {
    return (
        <div className="write__review">
            <textarea
                name="review"
                id="review"
                cols="30"
                rows="10"
                placeholder="write review..."
                required
            ></textarea>
            <input
                type="number"
                name="rate"
                id="rate"
                max={5}
                min={0}
                defaultValue={5}
                required
            />
            <button>Submit</button>
        </div>
    );
};
