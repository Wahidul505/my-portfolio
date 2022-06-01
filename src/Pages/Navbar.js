import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <div className='fixed top-4 right-4 text-3xl'>
            {
                pathname === '/' ?
                    <></>
                    :
                    <span className='span-container w-fit'><span>Wahidul</span><Link to='/' className='link no-underline translate-x-4 hover:-translate-x-4 transition-transform duration-700'>Wahidul/ home</Link></span>
            }
        </div>
    );
};

export default Navbar;