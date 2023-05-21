import React from 'react';
import Headers from '../Headers/Headers';
import CategoriesTab from '../CategoriesTab/CategoriesTab';
import Gallery from '../Gallery/Gallery';
import UpcomingSection from '../UpcomingSection/UpcomingSection';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Gallery></Gallery>
            <div className='mb-10'>
                <CategoriesTab></CategoriesTab>
            </div>
            <UpcomingSection></UpcomingSection>
        </div>
    );
};

export default Home;