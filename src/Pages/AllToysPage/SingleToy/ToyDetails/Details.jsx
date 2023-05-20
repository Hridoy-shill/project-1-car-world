import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()

    const { Category, Price, Quantity, ToyName, description, ratting, seller, sellerName, toyImg } = details || {}

    return (
        <>
            <h1 className='font-bold text-center text-3xl border-2 border-black mt-10 rounded w-fit mx-auto p-2'>{ToyName} Details</h1>
            <div className="hero w-10/12 mx-auto my-10 rounded border-2 hover:border-black hover:rounded-lg hover:bg-gray-200 hover:p-5 duration-700 bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full'>
                        <img src={toyImg} className="rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold mb-14 border-b-2 w-fit border-black">{ToyName}</h1>
                        <p className='font-semibold text-lg my-4'><span className='font-bold text-xl me-1'>Seller:</span> {sellerName}</p>
                        <p className='font-semibold text-lg my-4'><span className='font-bold text-xl me-1'>Seller Email:</span> {seller}</p>
                        <p className='font-semibold text-lg my-4'><span className='font-bold text-xl me-1'>Price:</span> {Price} $</p>
                        <p className='font-semibold text-lg my-4'><span className='font-bold text-xl me-1'>Ratting:</span> {ratting}</p>
                        <p className='font-semibold text-lg my-4'><span className='font-bold text-xl me-1'>Available Quantity:</span> {Quantity}</p>
                        <button className="btn mt-10 w-1/2">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;