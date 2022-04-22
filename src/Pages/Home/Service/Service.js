import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
    navigate(`/service/${id}`);
    }


    return (
        <div className='service'>
            <img className='w-100' src={img} alt=''></img>
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;