import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/SharedPages/NavBar/NavBar';
import Footer from '../Pages/SharedPages/Footer/Footer';


const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;