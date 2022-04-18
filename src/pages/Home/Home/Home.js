import React from 'react';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
        </div>
    );
};

export default Home;