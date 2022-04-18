import React from 'react';
import Contract from '../Contract/Contract';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../../Shared/Footer/Footer'
import './Home.css'

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;