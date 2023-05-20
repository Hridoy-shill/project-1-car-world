import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const carData = useLoaderData()
    const {car_img, car_name, price, ratting} = carData || {}
    return (
        <div>
            <p>this is car details</p>
        </div>
    );
};

export default CarDetails;