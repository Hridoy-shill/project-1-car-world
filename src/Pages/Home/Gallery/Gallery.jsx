import React from 'react';

const Gallery = () => {
    return (
        <div className='mb-10 p-10'>
            <h1 className='text-3xl font-bold mx-auto border-b-2 border-black pb-2 w-fit'>Car's Gallery</h1>

            <div className='grid lg:grid-cols-3 border-2 lg:mt-5 mt-4 lg:mx-10 gap-3 lg:p-10 hover:bg-gray-200 hover:border-black hover:rounded-lg duration-700'>
                <div className='lg:w-80 transition ease-in-out delay-150 hover:-translate-y-2 border-2 hover:border-black rounded-lg duration-500'>
                    <img className='rounded-lg hover:shadow-lg' src="https://i.ibb.co/mShxFBg/car2.jpg" alt="" />
                </div>
                <div className='w-80 transition ease-in-out delay-150 hover:-translate-y-2 border-2 hover:border-black rounded-lg duration-500'>
                    <img className='rounded-lg hover:shadow-lg' src="https://i.ibb.co/fNWgRn5/car3.webp" alt="" />
                </div>
                <div className='w-80 transition ease-in-out delay-150 hover:-translate-y-2 border-2 hover:border-black rounded-lg duration-500'>
                    <img className='rounded-lg hover:shadow-lg' src="https://i.ibb.co/10RYGG2/car4.jpg" alt="" />
                </div>
                <div className='w-80 transition ease-in-out delay-150 hover:-translate-y-2 border-2 hover:border-black rounded-lg duration-500'>
                    <img className='rounded-lg hover:shadow-lg' src="https://i.ibb.co/JsHd0Hr/car1.jpg" alt="" />
                </div>
                <div className='w-80 transition ease-in-out delay-150 hover:-translate-y-2 border-2 hover:border-black rounded-lg duration-500'>
                    <img className='rounded-lg hover:shadow-lg' src="https://i.ibb.co/pzSJ5Hk/monster-truck2.jpg" alt="" />
                </div>
                <div className='w-80 transition ease-in-out delay-150 hover:-translate-y-2 border-2 hover:border-black rounded-lg duration-500'>
                    <img className='rounded-lg hover:shadow-lg' src="https://i.ibb.co/CPys3k0/Monster-truck3.jpg" alt="" />
                </div>
                <div className='w-80 transition ease-in-out delay-150 hover:-translate-y-2 border-2 hover:border-black rounded-lg duration-500'>
                    <img className='rounded-lg hover:shadow-lg' src="https://i.ibb.co/qBf2sQV/Monster-truck4.webp" alt="" />
                </div>
                <div className='w-80 transition ease-in-out delay-150 hover:-translate-y-2 border-2 hover:border-black rounded-lg duration-500'>
                    <img className='rounded-lg hover:shadow-lg' src="https://i.ibb.co/Gk1xjx3/Monster-Truck1.webp" alt="" />
                </div>
                <div className='w-80 transition ease-in-out delay-150 hover:-translate-y-2 border-2 hover:border-black rounded-lg duration-500'>
                    <img className='rounded-lg hover:shadow-lg' src="https://i.ibb.co/rttvQFR/track2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;