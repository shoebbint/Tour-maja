import React from 'react';
import { Col, Row } from 'react-bootstrap';
import mypic from '../../images/FB_IMG_1635874054416.jpg'
const About = () => {
    return (
        <div className='container text-start my-5'>
                  <Row>
        <Col md={6}>
            <h1>About me</h1>
            <h3>Shoeb bin taher</h3>
            <h2>Email:</h2>
            <p>shoebbint@gmail.com</p>
            <h2>Expertise</h2>
            <p>Web developer</p>
            <h2>Phone no.</h2>
            <p>01638215986</p>
            <button className='btn btn-primary'>Download Cv</button>
        </Col>
        <Col md={6}>
            <img className='h-50 ' src={mypic} alt="" />
        </Col>
      </Row>
        </div>
    );
};

export default About;