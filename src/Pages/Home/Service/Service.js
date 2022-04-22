import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt=''></img>
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <p>{description}</p>
            <button className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;