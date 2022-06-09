import React, { useEffect, useState } from 'react';
import Heading from '../Shared/Heading';
import WorkCard from './WorkCard';

const Works = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setWorks(data));
    }, [])
    return (
        <div className='py-28 px-4 md:px-20'>
            <Heading>My Projects</Heading>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    works.map(work => <WorkCard
                        key={work.id}
                        work={work}
                    />)
                }
            </div>
        </div>
    );
};

export default Works;