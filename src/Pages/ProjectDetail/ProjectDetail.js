import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SliderContainer from './SliderContainer';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch(`https://wahidul-portfolio-server.herokuapp.com/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data));
    }, [id]);
    console.log(project);
    return (
        <div className='mt-28 lg:px-48 md:px-28 px-4 pb-20'>
            <SliderContainer project={project} />
            <div className='mt-8 mb-6'>
                {
                    project?.details && project?.details.map((detail, index) => <p
                        key={index} className="mb-3 flex gap-2 text-lg">
                        <span>⚪</span> <span>{detail}</span>
                    </p>)
                }
            </div>
            <div className='flex justify-center flex-col md:flex-row'>
                <a href={project?.codeLink && project?.codeLink[0]} target="_blank" rel="noreferrer" class="btn rounded-none btn-accent btn-outline">Frontend Code</a>
                <a href={project?.link && project?.link} target="_blank" rel="noreferrer" class="btn rounded-none btn-accent btn-outline">Visit Site</a>
                <a href={project?.codeLink && project?.codeLink[1]} target="_blank" rel="noreferrer" class="btn rounded-none btn-accent btn-outline">Backend Code</a>
            </div>
        </div>
    );
};

export default ProjectDetail;