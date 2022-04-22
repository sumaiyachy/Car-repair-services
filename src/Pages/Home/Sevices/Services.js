import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

// const services = [
//     { id: 1, name: 'Oil Change', price: 100, description: '', img: 'https://i.ibb.co/HN7stY7/erik-mclean-3u-Hl-GFnz-PDU-unsplash.png' },
//     { id: 2, name: 'change', price: 200, description: '', img: 'https://i.ibb.co/FkpszNM/erik-mclean-3u-Hl-GFnz-PDU-unsplash-1.jpg' }
// ];

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container'>
           <div className="row">
           <h2 className='text-primary text-center mt-5'>Our Services</h2>
           <div className="services-container">
           {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
           </div>
           </div>
        </div>
    );
};

export default Services;