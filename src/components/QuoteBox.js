import React from 'react';
import quotes from '../quotes.json';
import Button from './Button';
import { useState } from 'react';

const Card = ({off, color}) => {
    const [alterQuote, setAlterQuote] = useState(getQuote());
    const changeQuote = () => {
        setAlterQuote(getQuote());
    }

    return (
        <div className='quoteBox'>
            <div>
                <i className="fa-solid fa-quote-left" style={{ color: color }}></i>
                <p style={{ color: color }}>{alterQuote.quote}</p>
            </div>
            <div>
                <p style={{ color: color }}>{alterQuote.author}</p>
            </div>
            <div><Button off={off} on={changeQuote} color={color}/></div>
        </div>
    );
};

const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

export default Card;