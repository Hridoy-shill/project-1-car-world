import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from './SingleToy/SingleToy';

const AllToysPage = () => {
    const allToys = useLoaderData()
    // console.log(allToys);
    return (
        <>
            <h2 className='font-bold text-3xl border-b-2 border-black w-fit p-4 mx-auto'>All Car's</h2>
            <div className='py-10'>
                <table className="table w-full my-10">
                    <thead>
                        <tr className='text-center'>
                            <th className=' text-base font-bold'>Toy Name</th>
                            <th className=' text-base font-bold'>Sub-category</th>
                            <th className=' text-base font-bold'>Price</th>
                            <th className=' text-base font-bold'>Available Quantity</th>
                            <th className=' text-base font-bold'>SellerID</th>
                            <th className=' text-base font-bold'>Update</th>
                            <th className=' text-base font-bold'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllToysPage;