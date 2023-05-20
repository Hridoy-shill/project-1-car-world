import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const SportCar = ({ car }) => {

    const { _id, category_id, car_img, car_name, price, ratting } = car || {};
    
    const {user} = useContext(AuthContext);
    // console.log(user);

    const handleCarDetails = (id) =>{
        if(user){
            console.log(id);
        }
        else{
            alert("plz log in fist")
        }
    }

    return (
        <div className="card w-fit bg-base-100 shadow-xl border-2 border-gray-100">
            <figure><img src={car_img} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="font-bold text-3xl">{car_name}</p>
                <div className='my-2'>
                    <p className='font-semibold text-lg'>Price: {price}$</p>
                    <p className='font-semibold text-lg'>ratting:{ratting}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleCarDetails(_id)} className="btn w-full">View details</button>
                </div>
            </div>
        </div>
    );
};

export default SportCar;