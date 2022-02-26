import React from 'react';
import quotes from '../quotes.json';
import { useState } from 'react';

const Card = (color) => {

    const [alterQuote, setAlterQuote] = useState(getQuote());
    const changeQuote = () => {
        setAlterQuote(getQuote());
    }

    return (
        <div className='quoteBox'>
            <div>
                <i className="fa-solid fa-quote-left" style={{ color: color }}></i>
                <p>{alterQuote.quote}</p>
            </div>
            <div>
                {alterQuote.author}
            </div>
            <button onClick={changeQuote}>a</button>
        </div>
    );
};

const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

export default Card;