import React from 'react';
import picture from '../../Images/53868147_1116038761901913_3493118200579620864_n.jpg'

const About = () => {
    return (
        <div className=''>
            <img className='img-fluid' src={picture} alt="" />
            <h1>Hi I am Hossain</h1>
            <h3>I am from Chattogram. I am a student of International Islamic University Chittagong. My department is CSE.</h3>
        </div>
    );
};

export default About;