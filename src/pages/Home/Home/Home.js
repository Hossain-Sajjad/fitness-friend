import React from 'react';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <h1 className='text-center'>project setup done</h1>
            <Services></Services>
        </div>
    );
};

export default Home;