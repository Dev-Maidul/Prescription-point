import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Layout;