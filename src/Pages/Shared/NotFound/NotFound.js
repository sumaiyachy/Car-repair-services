import React from 'react';
import error from '../../../image/error.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Mechanic is asleep.</h1>
            <img src={error} width='100%' alt=""/>
        </div>
    );
};

export default NotFound;