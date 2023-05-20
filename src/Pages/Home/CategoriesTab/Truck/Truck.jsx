import React from 'react';
import { Link } from 'react-router-dom';

const Truck = ({ car }) => {

    const { _id, category_id, car_img, car_name, price, ratting } = car || {};

    return (
        <div>
            <div className="card w-fit h-fit bg-base-100 shadow-xl border-2 border-gray-100">
                <figure><img src={car_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="font-bold text-2xl">{car_name}</p>
                    <div className='my-2'>
                        <p className='font-semibold text-lg'>Price: {price}$</p>
                        <p className='font-semibold text-lg'>ratting:{ratting}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <Link to={`/carDetails/${_id}`}><button className="btn w-full">View details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Truck;