import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='bg-neutral-900 lg:px-60 md:px-32'>
            <div
                style={{ backgroundImage: "url('https://i.ibb.co/44WDZyX/IMG-0038-Copy-removebg-preview-3.png')" }}
                className='text-white pt-12 h-screen overflow-hidden bg-right bg-no-repeat pl-12'>
                <div className='font-thin uppercase lg:text-7xl md:text-6xl text-5xl w-full flex flex-col gap-2 h-full md:justify-center'>
                    <span className='span1-container w-fit'><span>Hi,</span>
                        <Link to='/about' className='link1 opacity-0 hover:opacity-100 transition-opacity duration-700'>About</Link>
                    </span>
                    <span className='span2-container w-fit'><span>I am</span>
                        <Link to='/works' className='link2 opacity-0 hover:opacity-100 transition-opacity duration-700'>Works</Link>
                    </span>
                    <span className='span3-container w-fit'><span>Wahidul</span>
                        <Link to='/contact' className='link3 opacity-0 hover:opacity-100 transition-opacity duration-700'>Contact</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Home;