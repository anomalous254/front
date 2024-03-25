import React from 'react';
import './index.scss';
import { useSearchParams } from 'react-router-dom';
import { useWordsData } from '../../hooks';

export const Words = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const lang = searchParams.get('language') || '';
    const wordsData = useWordsData(lang);

    return (
        <div className='words'>
            <h4>{lang.charAt(0).toUpperCase() + lang.slice(1)}</h4>
            {wordsData.map((lang) => (
                <WordCard key={lang.answer} {...lang} />
            ))}
        </div>
    );
};

const WordCard = ({ english, answer }) => {
    return (
        <div className='words-card'>
            <p>{english}</p>
            <p>{answer}</p>
        </div>
    );
};
