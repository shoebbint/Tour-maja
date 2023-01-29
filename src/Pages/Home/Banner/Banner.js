import React from 'react';
import { Button, Card } from 'react-bootstrap';
import banner from '../../../images/banner.jpg'
const Banner = () => {
    return (
        <div className=''>

            <Card className="bg-dark text-white">
      <Card.Img style={{width:"100%",height:"580px"}} className='' src={banner} alt="Card image" />
      <Card.ImgOverlay className=' text-center d-flex justify-content-center align-items-center '>
<div className=' '>
<Card.Title>Card title</Card.Title>
        <Card.Text >
<h1 className='fs-6 fw-bold' >
Explore Amazing <br /> Places
</h1 >
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
        <Button variant="primary">Go somewhere</Button>
</div>
      </Card.ImgOverlay>
    </Card>
        </div>
    );
};

export default Banner;