import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner1.png'
import banner2 from '../../../Images/banner2.png'
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img className='img-fluid' alt="900x500" src={banner1} />
                    <Carousel.Caption>
                        <h3>Come and Fit for the Future.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100 mh-100' alt="900x500" src={banner2} />
                    <Carousel.Caption>
                        <h3>Get helped from certified traier and be fit.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default TopBanner;