import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hook/useTitle';
import Swal from 'sweetalert2'


const LoginPage = () => {

    const [error, setError] = useState('')
    const { logInUser, googleSingUp } = useContext(AuthContext)
    const navigate = useNavigate();
    useTitle('Login')
    const location = useLocation()
    console.log(location);
    const from = location.state?.from?.pathname || '/'

    const handleLogInData = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        logInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                Swal.fire({
                    icon: 'success',
                    text: 'LogIn successful',
                })
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const handleGoogleLogIn = () => {
        googleSingUp()
            .then(result => {
                const newUserByGoogle = result.user;
                navigate(from, { replace: true })
                alert('Login Successful')
                console.log(newUserByGoogle);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='my-20'>
            <h2 className='font-bold text-3xl mx-auto border-b-2 border-black w-fit my-5 p-2 rounded-lg'>Login</h2>


            <form onSubmit={handleLogInData} className='w-1/2 p-8 mx-auto border-2 border-gray-400 rounded-md bg-slate-200'>
                <div className='flex flex-col'>
                    <label className='font-bold text-xl' htmlFor="email">Email:</label>
                    <input className='w-full border-2 p-3 rounded border-gray-600 mt-4' type="email" name="email" id="" placeholder='Enter your email' required />
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-xl' htmlFor="password">Password:</label>
                    <input className='w-full border-2 p-3 rounded border-gray-600 mt-4' type="password" name="password" id="" placeholder='Enter your password' required />
                </div>
                <div>
                    <p className='text-red-600 font-bold text-base mt-3'>{error}</p>
                </div>
                <div>
                    <button className='btn w-full mt-6'>logIn</button>
                </div>
                <div className="divider">OR</div>
                <div>
                    <button onClick={handleGoogleLogIn} className='btn w-full'>LogIn with Google</button>
                </div>

                <div className='text-center mt-3'>
                    <p className='font-semibold text-base'>Don't have any account? <Link to={'/singUp'} className='font-bold text-xl text-gray-500'>SingUp</Link></p>
                </div>

            </form>

        </div>
    );
};

export default LoginPage;