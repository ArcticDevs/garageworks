import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from './Footer';

const Layout = ({ children }) => {

    return (
        <>
        <Navbar/>
            <div className='container'>
                <main>
                    {children}
                </main>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default Layout;