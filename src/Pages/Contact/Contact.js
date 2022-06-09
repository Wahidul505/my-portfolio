import React from 'react';
import toast from 'react-hot-toast';
import Heading from '../Shared/Heading';
import Mailer from './Mailer';

const Contact = () => {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('wahidul505@gmail.com');
        toast.success('Copied to Clipboard', { id: 'copiedSuccess2' });
    }
    return (
        <div className='mt-28'>
            <div className='text-xl lg:px-48 md:px-28 px-4'>
                <Heading>Contact</Heading>
                <p className='mb-6'>I am seeking out opportunities to work in companies / agencies and not just work for them. I will be fully dedicated to my ideal job. I would also be highly encouraged if I get the chance work in a progressing company as a Web Developer.
                </p>
                <p>Feel free to reach out through any platform below:</p>
                <div>
                    <p className='text-2xl w-fit mt-2 text-accent hover:translate-x-9 transition-transform'>
                        <button
                            onClick={handleCopyEmail}
                        >wahidul505@gmail.com</button>
                    </p>
                    <p className='text-2xl w-fit mt-2 text-accent hover:translate-x-7 transition-transform'>
                        <a target="_blank" href="https://www.linkedin.com/in/the-wahidul-alam/" rel="noreferrer">LinkedIn</a>
                    </p>
                    <p className='text-2xl w-fit mt-2 text-accent hover:translate-x-9 transition-transform'>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100054333137557" rel="noreferrer">Facebook</a>
                    </p>
                </div>
            </div>
            <div>
                <Mailer />
            </div>
        </div>
    );
};

export default Contact;