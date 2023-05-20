import React from 'react';
import { Link } from 'react-router-dom';

const MyToysCollection = ({ toy, setReload, reload }) => {
    // console.log(toy);
    const { _id, Category, Price, Quantity, ToyName, seller } = toy

    const handleDeleteToy = (id) => {
        
        fetch(`http://localhost:5000/deleteToy/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                setReload(!reload)
            })
    }

    return (
        <tr className='text-center'>
            <td className='font-semibold'>{ToyName}</td>
            <td className='font-semibold'>{Category}</td>
            <td className='font-semibold'>{Price}$</td>
            <td className='font-semibold'>{Quantity}</td>
            <td className='font-semibold'>{seller}</td>
            <td className='font-semibold'><Link to={`/ToyDetails/${_id}`}><button className='btn'>Update</button></Link></td>
            <td className='font-semibold'><Link><button onClick={() => handleDeleteToy(_id)} className='btn'>Delete</button></Link></td>
        </tr>
    );
};

export default MyToysCollection;