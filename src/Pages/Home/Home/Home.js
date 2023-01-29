import React from 'react';
import Banner from '../Banner/Banner';
import PopularDestination from '../PopularDestination/PopularDestination';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
                    <Banner></Banner>
                    <Services></Services>
                    <PopularDestination></PopularDestination>
                    
        </div>
    );
};

export default Home;