import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Social.css'
import Loading from '../../Shared/Loading/Loading';

const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;
    let loadingElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>;
    }
    if (loading || loading1) {
        loadingElement = <Loading></Loading>;
    }
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='divider'></div>
                <p className='mt-2 px-2'>or</p>
                <div className='divider'></div>
            </div>
            {errorElement}
            {loadingElement}
            <div className='w-50 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto'>Google Sign In</button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto mt-2'>Github Sign In</button>
            </div>
        </div>
    );
};

export default Social;