import React from 'react';
import Headers from '../Headers/Headers';
import CategoriesTab from '../CategoriesTab/CategoriesTab';
import Gallery from '../Gallery/Gallery';
import UpcomingSection from '../UpcomingSection/UpcomingSection';
import MiniCars from '../MiniCarsSection/MiniCars';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Gallery></Gallery>
            <div className='mb-10'>
                <CategoriesTab></CategoriesTab>
            </div>
            <UpcomingSection></UpcomingSection>
            <MiniCars></MiniCars>
        </div>
    );
};

export default Home;