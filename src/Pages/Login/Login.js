import React from 'react';
import { Button, Form } from 'react-bootstrap';
import img from '../../images/3504.png_860-removebg-preview.png'
const Login = () => {
    return (
        <div className='my-5  row '>
<div className='col-md-6 col-sm-12'>
<img style={{width:"500px"}} src={img} alt="" />
</div>
<div className='col-md-6 col-sm-12 text-start px-5 '>
<Form className='p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
        </div>
    );
};

export default Login;