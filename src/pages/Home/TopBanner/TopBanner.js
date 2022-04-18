import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mh-100"
                        src="https://i.ibb.co/K9Rcb4M/240-F-106667964-Qt2-Vb-Y8-OTwyl-Q5q-Wbrp-SQ1v-WCx4-Ubjfs.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mh-100"
                        src="https://i.ibb.co/k39Jfm7/horizontal-shot-handsome-unshaven-man-has-workout-gym-trains-biceps-with-sport-instructor-wears-acti.webp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mh-100"
                        src="https://i.ibb.co/bryLVM6/240-F-333921065-Qjw1-M9h-NNi-VAL5bc0-Smx-Ha-Bofb-TBNThd.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;