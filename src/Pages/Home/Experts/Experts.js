import React from 'react';
import expert1 from '../../../image/experts/expert-1.jpg';
import expert2 from '../../../image/experts/expert-2.jpg';
import expert3 from '../../../image/experts/expert-3.jpg';
import expert4 from '../../../image/experts/expert-4.jpg';
import expert5 from '../../../image/experts/expert-5.jpg';
import expert6 from '../../../image/experts/expert-6.png';
import Expert from '../Expert/Expert';


const experts = [
    {id:1, name: 'Will Smith', img: expert1},
    {id:2, name: 'Chris Rock', img: expert2},
    {id:3, name: 'Walter Ron', img: expert3},
    {id:4, name: 'Smith potter', img: expert4},
    {id:5, name: 'Zacky Gomez', img: expert5},
    {id:6, name: 'Ryan Stewart', img: expert6}
]

const Experts = () => {
    return (


        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Our Experts</h1>
        <div className="row">
            {
                experts.map(expert => <Expert
                key={expert.id}
                expert={expert}
                ></Expert>)
            }
        </div>
        </div>
    );
};

export default Experts;