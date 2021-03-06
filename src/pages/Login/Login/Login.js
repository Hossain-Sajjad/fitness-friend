import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }
    if (loading || sending) {
        <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const loginBtnSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent.');
        }
        else {
            toast('Please! Enter Your Email Address.');
        }
    }

    return (
        <div className='container'>
            <h1 className='w-50 mx-auto mt-2'>Log In</h1>
            <Form onSubmit={loginBtnSubmit} className='w-50 mx-auto mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter your email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                {errorElement}
                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <p className='mt-2 w-50 mx-auto'>Don't have a account? <Link to='/register' className='text-decoration-none'>Register Now</Link></p>
            <p className='w-50 mx-auto'>Forget password? <Link to='/login' onClick={resetPassword} className='text-decoration-none'>Reset Password</Link></p>
            <Social></Social>
            <ToastContainer />
        </div>
    );
};

export default Login;