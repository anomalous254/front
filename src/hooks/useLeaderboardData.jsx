import React from 'react';

const data = [
    {
        name: 'Kwame Amoah',
        points: 1500,
        position: 1,
        image_url:
            'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    },
    {
        name: 'Ngozi Eze',
        points: 1200,
        position: 2,
        image_url:
            'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    },
    {
        name: 'Chinwe Onyeka',
        points: 1000,
        position: 3,
        image_url:
            'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    },
    {
        name: 'Ayodele Adekunle',
        points: 980,
        position: 4,
        image_url:
            'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    },
    {
        name: 'Naledi Kgomo',
        points: 900,
        position: 5,
        image_url:
            'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    },
    {
        name: 'Sizwe Dlamini',
        points: 850,
        position: 6,
        image_url:
            'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    },
    {
        name: 'Lerato Mabaso',
        points: 800,
        position: 7,
        image_url:
            'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    },
    {
        name: 'Obioma Okonkwo',
        points: 780,
        position: 8,
        image_url:
            'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    },
    {
        name: 'Thabo Modise',
        points: 750,
        position: 9,
        image_url:
            'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    },
];

export const useLeaderboardData = () => {
    return data || [];
};
