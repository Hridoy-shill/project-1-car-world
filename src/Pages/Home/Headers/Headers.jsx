import React from 'react';
import banner from '../../../assets/banner.jpg'

const Headers = () => {
    return (
        <div className='relative z-10 mb-8'>
            <img src={banner} alt="" />
            <div className='absolute top-0 bg-gradient-to-t from-slate-700 z-20 w-full h-full'></div>
            <div className='absolute lg:top-1/3 top-1/4 lg:left-80 left-1/4 z-50 border-2 lg:p-8 p-2 rounded hover:bg-gray-600 hover:bg-opacity-40 lg:hover:p-10 duration-500'>
                <h2 className='lg:font-bold lg:text-5xl text-white lg:leading-snug'>
                    The car's world make's <br /> Enjoyable Everyday.....
                </h2>
                <div className='text-center'><button className='bg-white hover:bg-white duration-500 bg-opacity-50 lg:p-3 p-2 font-bold mt-5 lg:text-2xl rounded-lg'>Explore More..</button></div>
            </div>
        </div>
    );
};

export default Headers;