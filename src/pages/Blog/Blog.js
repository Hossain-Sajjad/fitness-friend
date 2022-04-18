import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <p className='question-container'>authorization Authentication is creating a user or creating a profile and give permission to a user to log in.
                Authorization is giving a user any permission to do any specific task. Not all user get authorization.
            </p>
            <p className='question-container'>
                I am using firebase to do my site dynamic as with the help of fire base we can create user register and log in. We can authenticate user for login and register.
                Alternative of firebase: Parse, AWS Amplify, Flutter and many more.
            </p>
            <p className='question-container'>
                Firebase not only provide authentication, we can also host our website here and analysis our site.
            </p>
        </div>
    );
};

export default Blog;