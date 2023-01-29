import React from 'react';
import { Button, Card } from 'react-bootstrap';
import UsePlaces from '../../../Hooks/UsePlaces';
import css from './PopularDestination.css'
const PopularDestination = () => {
    const [places, setPlaces] = UsePlaces([]);
    const sliceplaces = places.slice(1, 4);
    console.log("dffa", sliceplaces);
    return (
        <div className='container my-5'>
            <div class="mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
                            <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span class="d-flex align-items-center">&nbsp;CNN News</span></div>
                            <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <a href="#">
                                <h1>Popular Destinations
                                    Favorite Places to Visit</h1>
                            </a>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-3 '>
                {
                    sliceplaces.map(sliceplace =>

                        <div className='col'>
                            <Card className='border-0'>
                                <Card.Img style={{ width: "350px", height: "350px" }} src={sliceplace.picture} alt="Card image" />
                                <Card.ImgOverlay className='text-center d-flex justify-content-center mt-4'>
                                    <Card.Body className=''>
                                        <Card.Title>{sliceplace.name}</Card.Title>
                                        <Card.Text>
                                            {sliceplace.about}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card.ImgOverlay>

                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularDestination;