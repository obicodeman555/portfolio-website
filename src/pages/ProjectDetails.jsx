import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../projectData';

const ProjectDetails = () => {

    const { name } = useParams();

    const projectDetails = projects.find(p => p.readMoreLink === name)


    console.log(projectDetails)

    return (
        <div>
            <img src={projectDetails.imgSrc} alt="" />
        </div>
    )
}

export default ProjectDetails