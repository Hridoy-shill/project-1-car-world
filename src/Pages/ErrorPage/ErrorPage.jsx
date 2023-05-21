import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <div className='relative'>
                <img className='w-screen h-screen' src="https://i.ibb.co/Yt5wJnp/pngtree-error-page-not-found-404-background-picture-image-1177786.png" alt="" />
            </div> 
            <div className='absolute top-32 left-3/4 btn text-xl'>
                <button className='w-60'>Go to Home</button>
            </div>
        </>
    );
};

export default ErrorPage;