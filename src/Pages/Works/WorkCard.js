import React from 'react';
import './WorkCard.css';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const WorkCard = ({ work }) => {
    const { name, details, banner, link } = work;
    return (
        <div>
            <div
                style={{ backgroundImage: `url('${banner}')` }}
                class="hero work-card h-80 rounded-lg">
                <div class="hero-overlay bg-opacity-40 rounded-lg"></div>
                <div class="hero-content text-center text-neutral-content work-content opacity-0 hover:opacity-100 transition-opacity duration-700 h-full bg-neutral bg-opacity-80 rounded-lg w-full">
                    <div class="w-full h-full">
                        <h1 class="mb-5 text-3xl font-bold">{name}</h1>
                        <div className='md:flex flex-col gap-2 hidden w-full pl-8'>
                            {
                                details.map((detail, index) => <p key={index} className="text-left">
                                    <span className='font-bold'>•</span> {detail}
                                </p>)
                            }
                        </div>
                        <a target="_blank" href={link} rel="noreferrer" class="btn btn-accent btn-outline flex flex-col md:flex-row items-center gap-3 md:w-1/2 mx-auto mt-2">Visit Website <BsBoxArrowUpRight /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;