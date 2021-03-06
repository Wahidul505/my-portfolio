import React from 'react';
import './WorkCard.css';
import { Link } from 'react-router-dom';

const WorkCard = ({ work }) => {
    const { _id, name, banners } = work;
    return (
        <div>
            <div
                style={{ backgroundImage: `url('${banners[0]}')` }}
                class="hero work-card h-80">
                <div class="hero-overlay bg-opacity-10"></div>
                <div class="hero-content text-center text-neutral-content work-content opacity-0 hover:opacity-100 transition-opacity duration-700 h-full bg-neutral bg-opacity-80 w-full">
                    <div class="w-full h-full flex flex-col justify-center">
                        <h1 class="mb-5 text-3xl font-bold text-white">{name}</h1>
                        <Link to={`/project/${_id}`} class="btn btn-accent btn-outline flex flex-col md:flex-row items-center gap-3 md:w-1/2 mx-auto mt-2">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;