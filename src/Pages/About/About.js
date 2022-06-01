import React from 'react';
import Heading from '../Heading';
import Skills from './Skills';

const About = () => {
    return (
        <div className='pb-20'>
            <div
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className='h-screen flex flex-col items-center justify-center px-8'>
                <h1
                    data-aos="fade-up"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    className='text-5xl md:text-7xl'>I am Wahidul Alam,</h1>
                <p
                    data-aos="fade-up"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1200"
                    className='text-3xl md:text-5xl mt-2'>A Frontend Web Developer</p>
            </div>
            <div className='lg:px-48 md:px-28 px-10'>
                <Heading>About</Heading>
                <div>
                    <p className='text-2xl mb-3'>
                        Hi, I am a Junior Frontend Developer, working on React-based web applications and have made 10+ projects. Now, I am seeking for a job that will help me grow more.
                    </p>
                    <p className='text-lg'>
                        I started my Journey as a Frontend Developer recently. I am also a student of Computer and Communication Engineering. Although I am continuing my study, I can work almost half a day for my employee. I love to work in a freindly environment which will help me to learn more effectively. I am passionate about my career and being a Web developer is a blessing.
                    </p>
                </div>
                <div>
                    <Skills />
                </div>
                <div>
                    <p className='text-3xl font-semibold mb-6 mt-20 text-warning hover:translate-x-9 transition-transform'>
                        <a target="_blank" href="https://drive.google.com/file/d/1SYkpNeUkcNxExrq8hHwP4huo2jDgiCXJ/view?usp=sharing" rel="noreferrer">My Resume</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;