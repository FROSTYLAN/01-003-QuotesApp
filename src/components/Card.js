import React from 'react';
import quotes from '../quotes.json';
import { useState } from 'react';

const Card = () => {

    const [alterQuote, setAlterQuote] = useState(quotes[getQuote()]);
    const changeQuote = () => {
        setAlterQuote(quotes[getQuote()]);
    }

    return (
        <div className='card'>
            <div>
                <i class="fa-solid fa-quote-left"></i>
                {alterQuote.quote}
            </div>
            <div>
                {alterQuote.author}
            </div>
            <button onClick={changeQuote}>a</button>
        </div>
    );
};

const getQuote = () => Math.floor(Math.random() * quotes.length);

export default Card;