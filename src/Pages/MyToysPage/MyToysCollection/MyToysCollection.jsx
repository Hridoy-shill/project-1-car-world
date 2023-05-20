import React from 'react';
import { Link } from 'react-router-dom';

const MyToysCollection = ({ toy }) => {
    console.log(toy);
    const { _id, Category, Price, Quantity, ToyName, seller } = toy


    const handleUpdateDetails = () => {

        // <div>
        //     {/* The button to open modal */}
        //     <label htmlFor="my-modal-3" className="btn">open modal</label>

        //     {/* Put this part before </body> tag */}
        //     <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        //     <div className="modal">
        //         <div className="modal-box relative">
        //             <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        //             <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
        //             <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        //         </div>
        //     </div>
        // </div>
    }

    return (
        <tr className='text-center'>
            <td className='font-semibold'>{ToyName}</td>
            <td className='font-semibold'>{Category}</td>
            <td className='font-semibold'>{Price}$</td>
            <td className='font-semibold'>{Quantity}</td>
            <td className='font-semibold'>{seller}</td>
            <td className='font-semibold'><Link><button onClick={handleUpdateDetails} className='btn'>Update</button></Link></td>
            <td className='font-semibold'><Link><button className='btn'>Delete</button></Link></td>
        </tr>
    );
};

export default MyToysCollection;