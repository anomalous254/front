import React from 'react';

const swahili = [
    {
        english: 'apple',
        answer: 'tufaha',
    },
    {
        english: 'banana',
        answer: 'ndizi',
    },
    {
        english: 'book',
        answer: 'kitabu',
    },
    {
        english: 'house',
        answer: 'nyumba',
    },
    {
        english: 'sun',
        answer: 'jua',
    },
    {
        english: 'moon',
        answer: 'mwezi',
    },
    {
        english: 'friend',
        answer: 'rafiki',
    },
    {
        english: 'mother',
        answer: 'mama',
    },
    {
        english: 'father',
        answer: 'baba',
    },
    {
        english: 'love',
        answer: 'upendo',
    },
];

const igbo = [
    {
        english: 'apple',
        answer: 'apụl',
    },
    {
        english: 'banana',
        answer: 'ose',
    },
    {
        english: 'book',
        answer: 'akwụkwọ',
    },
    {
        english: 'house',
        answer: 'ụlọ',
    },
    {
        english: 'sun',
        answer: 'àmà',
    },
    {
        english: 'moon',
        answer: 'onyeulo',
    },
    {
        english: 'friend',
        answer: 'nwoke',
    },
    {
        english: 'mother',
        answer: 'nne',
    },
    {
        english: 'father',
        answer: 'nna',
    },
    {
        english: 'love',
        answer: 'ifunanya',
    },
];

const hausa = [
    {
        english: 'apple',
        answer: 'albasa',
    },
    {
        english: 'banana',
        answer: 'ayaba',
    },
    {
        english: 'book',
        answer: 'littafi',
    },
    {
        english: 'house',
        answer: 'gidan',
    },
    {
        english: 'sun',
        answer: 'rana',
    },
    {
        english: 'moon',
        answer: 'cikin kasa',
    },
    {
        english: 'friend',
        answer: 'kawo',
    },
    {
        english: 'mother',
        answer: 'mama',
    },
    {
        english: 'father',
        answer: 'baba',
    },
    {
        english: 'love',
        answer: 'son',
    },
];

const yoruba = [
    {
        english: 'apple',
        answer: 'apọ',
    },
    {
        english: 'banana',
        answer: 'orombo',
    },
    {
        english: 'book',
        answer: 'iwe',
    },
    {
        english: 'house',
        answer: 'ile',
    },
    {
        english: 'sun',
        answer: 'ọṣa',
    },
    {
        english: 'moon',
        answer: 'osupa',
    },
    {
        english: 'friend',
        answer: 'alufa',
    },
    {
        english: 'mother',
        answer: 'mama',
    },
    {
        english: 'father',
        answer: 'baba',
    },
    {
        english: 'love',
        answer: 'ife',
    },
];

export const useWordsData = (language) => {
    if (language === 'swahili') {
        return swahili;
    } else if (language === 'hausa') {
        return hausa;
    } else if (language === 'igbo') {
        return igbo;
    } else if (language === 'yoruba') {
        return yoruba;
    } else {
        return [];
    }
};
