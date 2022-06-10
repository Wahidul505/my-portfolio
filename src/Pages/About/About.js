import React from 'react';
import Heading from '../Shared/Heading';
import Skills from './Skills';

const About = () => {
    return (
        <div className='pb-20'>
            <div
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className='h-screen flex flex-col items-center justify-center px-4 md:px-8'>
                <h1
                    data-aos="fade-up"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className='text-5xl md:text-7xl'>I am Wahidul Alam,</h1>
                <p
                    data-aos="fade-up"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    data-aos-delay="700"
                    className='text-3xl md:text-5xl mt-2'>A Frontend Web Developer</p>
            </div>
            <div className='lg:px-48 md:px-28 px-4'>
                <Heading>About</Heading>
                <div>
                    <p className='text-2xl mb-3'>
                        Hi, I am a Frontend Developer, working on React-based web applications and have made 30+ projects.
                    </p>
                    <p className='text-lg'>
                        I want to work in an innovative organization and want to dedicate myself to the field that I will work in. And I'm very passionate on my profession and have long planned a career in it.
                    </p>
                    <p className='text-lg mt-3'>
                        I also have good knowledge of communication and leadership skills. I am also good at painting. One more thing that I feel glad to mention is that I am a cat-loving person and I have three adorable cats.
                    </p>
                </div>
                <div>
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default About;