import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate()
    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`);
    }
    return (
        <div className='service text-center'>
            <img className='img-fluid' src={img} alt="" />
            <div className='p-2'>
                <h2>{name}</h2>
                <h3>{price}</h3>
                <p>{description}</p>
                <Button
                    onClick={() => navigateToCheckout(id)} className='text-decoration-none btn btn-primary'>Check Out</Button>
            </div>
        </div>
    );
};

export default Service;