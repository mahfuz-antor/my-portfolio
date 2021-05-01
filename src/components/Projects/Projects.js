import React from 'react';
import mohanonda from '../../file-img/Mohanonda IT.png';
import ProjectFive from './ProjectFive';
import ProjectFour from './ProjectFour';
import ProjectOne from './ProjectOne';
import './Projects.css';
import ProjectsThree from './ProjectsThree';
import ProjectTwo from './ProjectTwo';

const Projects = () => {
    return (
        <div>
            <div className="d-flex flex-row justify-content-center pt-1">
                <h2 className="text-align-center">Welcome to my Project Details Page.</h2>
            </div>
            <ProjectOne></ProjectOne>
            <ProjectTwo></ProjectTwo>
            <ProjectsThree></ProjectsThree>
            {/* <ProjectFour></ProjectFour>
            <ProjectFive></ProjectFive> */}
           
        </div>
    );
};

export default Projects;