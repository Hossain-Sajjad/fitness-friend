import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }
    if (loading || sending) {
        <Loading></Loading>
    }
    if (user) {
        navigate('/home')
    }
    const registerBtnSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='container'>
            <h1 className='w-50 mx-auto mt-2'>Register</h1>
            <Form onSubmit={registerBtnSubmit} className='w-50 mx-auto mt-3'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" />
                </Form.Group>
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
                    Register
                </Button>
            </Form>
            <p className='mt-2 w-50 mx-auto'>Already have a account? <Link to='/login' className='text-decoration-none'>Log In</Link></p>
            <p className='w-50 mx-auto'>Forget password? <Link to='/register' onClick={resetPassword} className='text-decoration-none'>Reset Password</Link></p>
            <Social></Social>
        </div>
    );
};

export default Register;