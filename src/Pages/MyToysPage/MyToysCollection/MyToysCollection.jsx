import React from 'react';
import { Link } from 'react-router-dom';

const MyToysCollection = ({toy}) => {
    console.log(toy);
    const {_id, Category, Price, Quantity, ToyName, seller} = toy
    return (
        <tr className='text-center'>
            <td className='font-semibold'>{ToyName}</td>
            <td className='font-semibold'>{Category}</td>
            <td className='font-semibold'>{Price}$</td>
            <td className='font-semibold'>{Quantity}</td>
            <td className='font-semibold'>{seller}</td>
            <td className='font-semibold'><Link><button className='btn'>Update</button></Link></td>
            <td className='font-semibold'><Link><button className='btn'>Delete</button></Link></td>
        </tr>
    );
};

export default MyToysCollection;