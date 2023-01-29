import React from 'react';
import { Button, Card } from 'react-bootstrap';
import UseServices from '../../../Hooks/UseServices';

const Services = () => {
    const [services, setServices] = UseServices();
    return (

        <div>

            <h1>Our Services</h1>
            <div className="d-flex container">
                {
                    services.map(service =>
                    (
                        <Card
                            bg={service.variant.toLowerCase()}
                            key={service.variant}
                            text={service.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            className="mb-2"
                        >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>{service.variant} Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}
            </div>
        </div>
    );
};

export default Services;