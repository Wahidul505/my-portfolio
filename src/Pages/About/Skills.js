import React from 'react';
import Heading from '../Heading';
import Progress from './Progress';

const Skills = () => {
    return (
        <div className='mt-28'>
            <Heading>Skills</Heading>
            <div className='flex flex-col gap-3 md:w-2/3 lg:w-1/2 w-11/12 mx-auto'>
                <Progress skill='HTML' value='90'/>
                <Progress skill='CSS' value='90'/>
                <Progress skill='JavaScript' value='90'/>
                <Progress skill='Responsiveness' value='90'/>
                <Progress skill='Tailwind' value='90'/>
                <Progress skill='Bootstrap' value='90'/>
                <Progress skill='ES6' value='85'/>
                <Progress skill='React' value='85'/>
                <Progress skill='UX' value='80'/>
                <Progress skill='Firebase' value='75'/>
                <Progress skill='React Router' value='75'/>
                <Progress skill='Express.js' value='70'/>
                <Progress skill='JWT' value='70'/>
                <Progress skill='MongoDB' value='60'/>
                <Progress skill='Node.js' value='40'/>
                <Progress skill='React Native' value='20'/>
                <Progress skill='Next JS' value='10'/>
            </div>
        </div>
    );
};

export default Skills;