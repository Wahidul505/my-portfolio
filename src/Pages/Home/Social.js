import React from 'react';
import toast from 'react-hot-toast';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';

const Social = () => {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('wahidul505@gmail.com');
        toast.success('Copied to Clipboard', { id: 'copiedSuccess' });
    }
    return (
        <div className='grid grid-cols-3 md:grid-cols-3 gap-4 text-5xl px-3 lg:text-7xl'>
            <div className='md:h-screen flex items-center justify-center bg-neutral w-full py-4 px-2 overflow-hidden'>
                <button><a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/the-wahidul-alam/"><BsLinkedin /></a></button>
            </div>
            <div className='md:h-screen flex items-center justify-center bg-neutral w-full py-4 px-2 overflow-hidden'>
                <button><a target='_blank' rel="noreferrer" href="https://github.com/Wahidul505"><BsGithub /></a></button>
            </div>
            <div className='md:h-screen flex items-center justify-center bg-neutral w-full py-4 px-2 overflow-hidden'>
                <button onClick={handleCopyEmail}><IoMailOutline /></button>
            </div>
        </div>
    );
};

export default Social;