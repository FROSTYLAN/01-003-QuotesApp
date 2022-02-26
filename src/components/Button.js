import React from 'react';

const Button = ({off, on, color}) => {
    return (
        <div className='button'>
            <i className="fa-solid fa-angle-right" onClick={()=>{const f1=on; const f2=off; f1(); f2()}} style={{background: color}}></i>
        </div>
    );
};

export default Button;