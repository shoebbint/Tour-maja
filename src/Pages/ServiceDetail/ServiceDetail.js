import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    // const {id,name}=service;
    // console.log(id,name)
    const { serviceId,name,about,price } = useParams();
    return (
        <div>
     <Card className="text-center">
      <Card.Header>Service Details</Card.Header>
      <Card.Body>
        <Card.Title>Service Name:{name}</Card.Title>
        <Card.Text>
          {about}
        </Card.Text>
        <Button as={Link} to="/checkout" variant="primary">CheckOut</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{price}</Card.Footer>
    </Card>
        </div>
    );
};

export default ServiceDetail;