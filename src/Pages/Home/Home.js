import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Social from './Social';

const Home = () => {
    return (
        <div className='bg-neutral-900'>
            <div className='text-white h-screen grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 gap-4 md:px-6 lg:px-12 py-32 md:py-0'>
                <div
                    style={{ fontFamily: "'Bitter', serif" }}
                    className='font-thin lg:text-9xl md:text-8xl text-6xl flex flex-col gap-2 h-full md:justify-center w-5/6 lg:w-full mx-auto md:col-span-3  lg:col-span-1'>
                    <span
                        data-aos="fade-right"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-shine"
                        data-aos-delay="100"
                        className='span1-container w-fit'><span>I am</span>
                        <Link to='/about' className='link1 opacity-0 hover:opacity-100 transition-opacity duration-700'>About</Link>
                    </span>
                    <span
                        data-aos="fade-right"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-shine"
                        data-aos-delay="600"
                        className='span2-container w-fit'><span>Wahidul</span>
                        <Link to='/works' className='link2 opacity-0 hover:opacity-100 transition-opacity duration-700'>Works</Link>
                    </span>
                    <span
                        data-aos="fade-right"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-shine"
                        data-aos-delay="1000"
                        className='span3-container w-fit'><span>Alam</span>
                        <Link to='/contact' className='link3 opacity-0 hover:opacity-100 transition-opacity duration-700'>Contact</Link>
                    </span>
                </div>
                <div className='md:col-span-2 lg:col-span-1'>
                    <Social/>
                </div>
            </div>
        </div>
    );
};

export default Home;