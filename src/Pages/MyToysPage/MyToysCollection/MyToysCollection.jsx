import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyToysCollection = ({ toy, setReload, reload }) => {
    // console.log(toy);
    const { _id, Category, Price, Quantity, ToyName, seller } = toy

    const handleDeleteToy = (id) => {

        fetch(`http://localhost:5000/deleteToy/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3D4451',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
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