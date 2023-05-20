import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, Navigate, useLocation } from 'react-router-dom';

const SingleToy = ({ toy }) => {

    const { user } = useContext(AuthContext)
    const location = useLocation();
    console.log(location);


    const { _id, Category, Price, Quantity, ToyName, seller, toyImg } = toy || {};

    const handleToyDetails = (id) => {
        if (user) {
            console.log(id);
        }
        else {
           
        }
    }
    return (
        <tr className='text-center'>
            <td className='font-semibold'>{ToyName}</td>
            <td className='font-semibold'>{Category}</td>
            <td className='font-semibold'>{Price} $</td>
            <td className='font-semibold'>{Quantity}</td>
            <td className='font-semibold'>{seller}</td>
            <td className='font-semibold'><button className='btn'>Update</button></td>
            <td className='font-semibold'><Link to={`/details/${_id}`}><button className='btn'>View Details</button></Link></td>
        </tr>
    );
};

export default SingleToy;