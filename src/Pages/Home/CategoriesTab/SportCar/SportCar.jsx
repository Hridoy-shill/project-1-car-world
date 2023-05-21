import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const SportCar = ({ car }) => {

    const { _id, category_id, car_img, car_name, price, ratting } = car || {};
    const { user } = useContext(AuthContext);

    const handleUserExist = () => {
        if (user) {
            <></>
        }
        else {
            alert('You have to log in first to view details')
        }
    }


    return (
        <div className="card w-fit bg-base-100 shadow-xl border-2 border-gray-100">
            <figure><img src={car_img} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="font-bold text-3xl">{car_name}</p>
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
                    <Link to={`/carDetails/${_id}`}><button onClick={handleUserExist} className="btn w-full">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SportCar;