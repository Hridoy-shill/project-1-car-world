import React from 'react';

const SingleToy = ({ toy }) => {

    const {_id, Category, Price, Quantity, ToyName, seller, toyImg} = toy

    const handleToyDetails =(id)=>{
        console.log(id);
    }
    return (
        <div>
            <div className="card w-fit bg-base-100 shadow-xl border-2 border-gray-100 p-2">
                <figure><img src={toyImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="font-bold text-2xl">{ToyName}</p>
                    <div className='my-2'>
                        <p className='font-semibold text-lg'><span className='font-bold text-gray-500 text-lg me-2'>Price:</span> {Price}$</p>
                        <p className='font-semibold text-lg'><span className='font-bold text-gray-500 text-lg me-2'>Quantity</span>: {Quantity}pice</p>
                        <p className='font-semibold text-lg'><span className='font-bold text-gray-500 text-lg me-2'>Category</span>: {Category}</p>
                        <p className='font-semibold text-lg w-fit'><span className='font-bold text-gray-500 text-lg me-2'>Seller</span>: {seller}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleToyDetails(_id)} className="btn w-full">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;