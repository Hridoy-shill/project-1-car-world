import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const MonsterTruck = ({ car }) => {

    const { _id, category_id, car_img, car_name, price, ratting } = car || {};

    return (
        <div>
            <div className="card w-fit h-fit bg-base-100 shadow-xl border-2 border-gray-100">
                <figure><img src={car_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="font-bold text-2xl">{car_name}</p>
                    <div className='my-2'>
                        <p className='font-semibold text-lg'>Price: {price}$</p>
                        <p className='font-semibold text-lg'>ratting:
                            <Rating
                                className='ms-2'
                                initialRating={ratting}
                                placeholderRating={<FaStar></FaStar>}
                                readonly
                                emptySymbol={<FaStar className='text-gray-500'></FaStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar className='text-orange-400'></FaStar>}>
                            </Rating>
                        </p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/carDetails/${_id}`}><button className="btn w-full">View details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonsterTruck;