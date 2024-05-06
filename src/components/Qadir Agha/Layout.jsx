import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [open, setOpen] = useState(false);
    const sidebarHandler = () => {
        setOpen(!open);
    };

    return (
        <div className='h-screen flex flex-col bg-white overflow-x-hidden'>
            <Header menuHandler={sidebarHandler} />
            <div className='flex flex-1 overflow-hidden'>
                <SideBar isOpen={open} />
                <div className='flex-1 overflow-y-auto '>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
