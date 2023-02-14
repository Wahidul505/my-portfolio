import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { TbMenu } from 'react-icons/tb';

const Navbar = () => {
    return (
        <div className="dropdown dropdown-end dropdown-hover fixed top-2 right-3 z-20">
            <label tabIndex="0" className="btn m-1 btn-accent btn-xl"><TbMenu /></label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52 flex flex-col gap-2">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/blogs'>Blogs</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;