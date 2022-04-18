import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contract.css'

const Contract = () => {
    return (
        <div className='container'>
            <div className='contact-container'>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicMassage">
                            <Form.Control type="text" placeholder="Enter Your Massage" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Your Email Address" />
                        </Form.Group>
                        <Button className='contact-btn-style' variant="primary" type="submit">
                            Contact
                        </Button>
                    </Form>
                </div>
                <div className='ps-5'>
                    <h2>Your Own <span className='contact-tittle'> Fitness Friend...!</span></h2>
                    <h4>Your Fitness Your Awareness</h4>
                    <h5>Contact me and keep your future fit.</h5>
                </div>
            </div>
        </div>
    );
};

export default Contract;