import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
   
    return (
        <div>
            <h2>Welcome to detail : {serviceId}</h2>
           <div className="text-center">
           <Link to="/checkout">
                <button className='btn btn-danger'>Proceed checkout</button>
            </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;<h2>Welcome to detail</h2>