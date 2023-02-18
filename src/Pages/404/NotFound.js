import React from 'react';
import errorpic from '../../images/404-Not-Found-SVG.png';
const NotFound = () => {
    return (
        <div>
            <img className='h-25' src={errorpic} alt="" />
        </div>
    );
};

export default NotFound;