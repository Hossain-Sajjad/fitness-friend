import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate()
    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`);
    }
    return (
        <div className='service text-center info-container'>
            <img className='img-fluid' src={img} alt="" />
            <div className='p-2'>
                <div className='info-container'>
                    <h2>{name}</h2>
                    <h4>$ {price}</h4>
                    <p>{description}</p>
                </div>
                <Button
                    onClick={() => navigateToCheckout(id)} className='btn-style text-decoration-none w-100'>Check Out</Button>
            </div>
        </div>
    );
};

export default Service;