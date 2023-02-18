import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UseServices from '../../../Hooks/UseServices';

const Services = () => {
    const navigate=useNavigate()
    const navigateToServiceDetail=(id,name,about,price)=>{
navigate(`/service/${id}/${name}/${about}/${price}`);


    }
    const [services, setServices] = UseServices();
    return (

        <div>

            <h1>Our Services</h1>
            <div className="d-flex container">
                {
                    services.map(service =>
                    (
                        <Card service={service}
                            bg={service.variant.toLowerCase()}
                            key={service.variant}
                            text={service.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            className="mb-2"
                        >
                            <Card.Header>      {service.balance}</Card.Header>
                            <Card.Body>
                                <Card.Title> {service.name}</Card.Title>
                                <Card.Text>
                                {service.about}
                                </Card.Text>
                                <Button onClick={()=>navigateToServiceDetail(service.id,service.name,service.about,service.balance)} variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}
            </div>
        </div>
    );
};

export default Services;