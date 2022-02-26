import React from 'react';

const Button = ({onClick, color}) => {
    return (
        <div className='button'>
            <i className="fa-solid fa-angle-right" onClick={onClick} style={{background: color}}></i>
        </div>
    );
};

export default Button;