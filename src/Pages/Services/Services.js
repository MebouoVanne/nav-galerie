import React from 'react';
import Menu from '../../Menu';
import img from '../../image/img6.jpg';
const Services = () => {
    return (
        <div>
            <Menu/>
            <h1> Services</h1>
            <img className='imgaccueil'  src={img}  height="200" width="50" alt="image"/>
        </div>
    );
};

export default Services;