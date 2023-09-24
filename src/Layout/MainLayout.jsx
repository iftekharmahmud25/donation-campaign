import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componants/Header/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-[1150px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;