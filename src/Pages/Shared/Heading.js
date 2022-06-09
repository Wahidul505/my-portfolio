import React from 'react';

const Heading = ({ children }) => {
    return (
        <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className='mb-8'>
            <h1
                style={{ fontFamily: "'Fira Sans', sans-serif" }}
                className='text-5xl uppercase'>{children}
            </h1>
        </div>
    );
};

export default Heading;