import React from 'react';

const reviews = [
    {
        id: 1,
        name: 'Kwame Osei',
        image: 'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
        comment:
            'This product exceeded my expectations! I have been using it for a while now, and it has truly impressed me with its quality, durability, and performance. The design is sleek and modern, and it fits perfectly with my lifestyle. I highly recommend it to anyone looking for a reliable and stylish product.',
        likes: 25,
        loves: 30,
        stars: 5,
        date: '2024-03-20',
    },
    {
        id: 2,
        name: 'Fatou Diop',
        image: 'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
        comment:
            "I'm very happy with this purchase. The product arrived quickly and was exactly as described. It has made my life so much easier and more organized. I can't imagine how I managed without it before. Thank you!",
        likes: 10,
        loves: 15,
        stars: 4,
        date: '2024-03-19',
    },
    {
        id: 3,
        name: 'Chukwudi Eze',
        image: 'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
        comment:
            "This product didn't meet my expectations. I was hoping for better quality, but unfortunately, it fell short. The design is nice, but the functionality is lacking. I've encountered several issues with it, and I'm considering returning it.",
        likes: 5,
        loves: 8,
        stars: 3,
        date: '2024-03-18',
    },
];

export const useReviews = () => {
    return reviews;
};
