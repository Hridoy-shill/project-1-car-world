import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SingUpPage = () => {

    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
   

    const handleSingUpData = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photo, email, password);

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;

            updateProfile(createdUser, {
                displayName: name,
                photoURL: photo
            })

            // console.log(createdUser);
            form.reset();
            navigate('/')
        })
        .catch(error =>{
            setError(error.message);
        })

    }
    return (
        <div className='my-20'>
            <h2 className='font-bold text-3xl mx-auto border-b-2 border-black w-fit my-5 p-2 rounded-lg'>SingUp</h2>
            <form onSubmit={handleSingUpData} className='w-1/2 p-8 mx-auto border-2 border-gray-400 rounded-md bg-slate-200'>
                <div className='flex flex-col'>
                    <label className='font-bold text-xl' htmlFor="email">Name:</label>
                    <input className='w-full border-2 p-3 rounded border-gray-600 mt-2' type="text" name="name" id="" placeholder='Enter your name' required/>
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='font-bold text-xl' htmlFor="email">Photo:</label>
                    <input className='w-full border-2 p-3 rounded border-gray-600 mt-2' type="text" name="photo" id="" placeholder='Enter your Photo URL' />
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='font-bold text-xl' htmlFor="email">Email:</label>
                    <input className='w-full border-2 p-3 rounded border-gray-600 mt-2' type="text" name="email" id="" placeholder='Enter your email' required/>
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='font-bold text-xl' htmlFor="email">Password:</label>
                    <input className='w-full border-2 p-3 rounded border-gray-600 mt-2' type="password" name="password" id="" placeholder='Enter your password' required/>
                </div>
                <div>
                    <p className='text-red-600 font-bold text-base mt-3'>{error}</p>
                </div>
                <div>
                    <button className='btn w-full mt-6'>SingUp</button>
                </div>
                
                <div className='text-center mt-5'>
                    <p className='font-semibold text-base'>Already have an account? <Link to={'/login'} className='font-bold text-xl text-gray-500 underline'>LogIn</Link></p>
                </div>
            </form>

        </div>
    );
};

export default SingUpPage;