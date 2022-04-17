import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service text-center'>
            <img className='img-fluid' src={img} alt="" />
            <div className='p-2'>
                <h2>{name}</h2>
                <h3>{price}</h3>
                <p>{description}</p>
                <Link className='text-decoration-none btn btn-primary' to='/login'>Check Out</Link>
            </div>
        </div>
    );
};

export default Service;