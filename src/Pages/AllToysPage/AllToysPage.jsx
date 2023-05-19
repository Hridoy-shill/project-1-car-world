import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from './SingleToy/SingleToy';

const AllToysPage = () => {
    const allToys = useLoaderData()
    // console.log(allToys);
    return (
        <>
            <h2 className='font-bold text-3xl border-b-2 border-black w-fit p-4 mx-auto'>All Car's</h2>
            <div className='grid grid-cols-4 gap-3 py-10'>

                {
                    allToys.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
                }
            </div>
        </>
    );
};

export default AllToysPage;