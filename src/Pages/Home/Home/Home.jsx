import React from 'react';
import Headers from '../Headers/Headers';
import CategoriesTab from '../CategoriesTab/CategoriesTab';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <div className='mb-10'>
                <CategoriesTab></CategoriesTab>
            </div>
        </div>
    );
};

export default Home;