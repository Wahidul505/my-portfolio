import React from 'react';

const Progress = ({ skill, value }) => {
    return (
        <p className='text-xl flex flex-col md:flex-row justify-between md:items-center'>
            <span className='font-semibold'>{skill} : </span>
            <progress className="progress progress-accent w-56 h-3" value={value} max="100"></progress>
        </p>
    );
};

export default Progress;