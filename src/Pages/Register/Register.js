import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init'
import img from '../../images/register.png';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';

const Register = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [user3, loading3, error3] = useAuthState(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const navigateLogin = (event) => {
        navigate('/login');
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
    const regEmailRef = useRef('');
    const regPasswordRef = useRef('');
    const nameRef = useRef('');
    const confirmPasswordRef = useRef('');
    const handleRegister = (event) => {
        event.preventDefault();
        const regEmail = regEmailRef.current.value;
        const regPassword = regPasswordRef.current.value;
        console.log(regEmail, regPassword)
        createUserWithEmailAndPassword(regEmail, regPassword);

    };
    if(user3||user1||user2||user){
        navigate(from, { replace: true });
      }

    return (
        <div>
            <div className='  row p-5'>
                <div className='col-md-6 col-sm-12 text-start px-5 p-5  '>
                    <Form onSubmit={handleRegister} className=''>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={regEmailRef} type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={regPasswordRef} type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control ref={confirmPasswordRef} type="password" placeholder="Password" />
                            </Form.Group> */}
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
               
                        <div className="d-grid gap-2 mb-2">
                    <Button className='px-5 rounded-pill ' variant="info" size="lg" type="submit">
                            Register
                        </Button>
                    </div>
                    </Form>
                    <p>Already have an account ? <Link to="/login" className='text-danger decoration-none' onClick={navigateLogin}>Please Login</Link ></p>
                    <div className="d-grid gap-2">
                    <Button onClick={()=>signInWithGoogle()} variant="primary rounded-pill"  size="lg">
                       <BsGoogle className='mx-1'/> Sign up with Google
                    </Button>
                    <Button onClick={()=>signInWithFacebook()} variant="warning rounded-pill" size="lg">
                    <FaFacebook className='mx-1'/>  Sign up with Facebook
                    </Button>
                </div>
                </div>
                <div className='col-md-6 col-sm-12 px-5'>
                    <img style={{ width: "500px" }} src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;