import React, { useRef } from 'react';
import { Button, Form  } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import img from '../../images/3504.png_860-removebg-preview.png'
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const emailRef=useRef();
  const passwordRef=useRef();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  // const [user1, loading1, error1] = useAuthState(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigateRegister = (event) => {
    navigate('/register');
  }

  const handleLogin=(event)=>{
    event.preventDefault();
   const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }
//toast passwordreset mail
const resetPassword = async() => {
  const email = emailRef.current.value;
  await sendPasswordResetEmail(email);
if(email){
  toast('Sent email');
}
else{
  toast('Please enter email address');
}
}

  if(user){
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>


  }
    return (
        <div className='my-5  row '>
<div className='col-md-6 col-sm-12'>
<img style={{width:"500px"}} src={img} alt="" />
</div>
<div className='col-md-6 col-sm-12 text-start px-5 '>
<Form onSubmit={handleLogin} className='px-5 pt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="d-grid gap-2 mb-2">
                    <Button className='px-5 rounded-pill ' variant="info" size="lg" type="submit">
                           Login
                        </Button>
                    </div>
    </Form>
    {errorElement}

  <p className='text-center'>Forget Password? <button className="btn btn-link text-primary decoration-none" to="/register" onClick={resetPassword}>Reset Password</button ></p>
  <p className='text-center'>New to Tour maja? <Link to="/register" className='text-primary decoration-none' onClick={navigateRegister}>Please Register</Link></p>
  <ToastContainer />
</div>
        </div>
    );
};

export default Login;