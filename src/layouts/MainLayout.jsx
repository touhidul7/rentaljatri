import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className=''>
                {/* <div className="h-16 pb-10">
                    <Navbar/>
                </div>  */}
            

                <div className='min-h-[calc(100vh-284px)]'>
                    <Outlet/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;