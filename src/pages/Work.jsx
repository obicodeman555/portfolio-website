import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import "./work.scss";
import { projects } from '../projectData';

import { Link } from 'react-router-dom';
import Header from '../components/header/Header';




const Work = () => {

    const [group, setGroup] = useState("show all");
    const [selectedIndex, setSelectedIndex] = useState(0);

    const filterableProjects = projects.filter((project) => project.group === group);
    const groups = ["show all", ...new Set(projects.map(p => p.group))]


    const filterButtonHandler = (e, i) => {
        setSelectedIndex(i);
        setGroup(e.target.value);
    }

    return (
        <div className='works'>
            <Header />
            <div className='ribbon'>
                <Link to={""}>
                    follow on github
                </Link>
            </div>
            <div className='container'>
                <h1 className='heading heading-1'>Some Things I&apos;ve Built</h1>
                <p className='text-paragraph'>My approach to development is to create a product that strengthens your company&apos;s brand while ensuring ease of use and simplicity for your audience.</p>
                <div className='tools-group'>
                    <label>Tools:</label>
                    <ul className='dev-tools-list'>
                        <li className='tool-item'>
                            <Icon icon="devicon:javascript" />
                            JavaScript
                        </li>
                        <li className='tool-item'>
                            <Icon icon="devicon:typescript" />
                            TypeScript
                        </li>
                        <li className='tool-item'>
                            <Icon icon="logos:react" />
                            React JS
                        </li>
                        <li className='tool-item'>
                            <Icon icon="logos:redux" />
                            Redux
                        </li>
                        <li className='tool-item'>
                            <Icon icon="vscode-icons:file-type-vue" />
                            Vue JS
                        </li>
                        <li className='tool-item'>
                            <Icon icon="devicon:css3" />
                            CSS3
                        </li>

                    </ul>
                </div>
                <div className='filter'>
                    <div className='filter-text'>
                        <label>filter by:</label>
                        <span>
                            Showing all projects. Use the filter to list item by skill or technology.
                        </span>
                    </div>
                    <ul className='filter-tab-list'>
                        {groups.map((g, index) => (
                            <li className='filter-tab' key={index}>
                                <button type='button' className={` ${index === selectedIndex ? "filter-tab__button selected" : "filter-tab__button"}`} value={g} onClick={(e) => filterButtonHandler(e, index)}>{g}</button>
                            </li>

                        ))}
                    </ul>
                    <div className='filter-content'>
                        <div className='projects'>

                            {
                                group === "show all" ? projects.map((project, index) =>
                                (
                                    <div key={index} className='project'>
                                        <div className='project-image'>
                                            <img src={project.imgSrc} alt='project poster' />
                                        </div>
                                        <div className='project-details'>
                                            <div className='project-details__inner'>
                                                <span>
                                                    <span className='project-details__name'>
                                                        {project.projectName}
                                                    </span>
                                                    <span className='project-details__tools'>{project.tools.join(", ")}</span>
                                                </span>
                                                <span className='project-details__link'>
                                                    <Link to={`//${project.websiteLink}`} target='__blank'>
                                                        View Project
                                                        <Icon icon="ic:round-arrow-forward-ios" />
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                                ) :
                                    filterableProjects.map((project, index) =>
                                    (
                                        <div key={index} className='project'>
                                            <div className='project-image'>
                                                <img src={project.imgSrc} alt='project poster' />
                                            </div>
                                            <div className='project-details'>
                                                <div className='project-details__inner'>
                                                    <span>
                                                        <span className='project-details__name'>
                                                            {project.projectName}
                                                        </span>
                                                        <span className='project-details__tools'>{project.tools.join(", ")}</span>
                                                    </span>
                                                    <span className='project-details__link'>
                                                        <Link to={`//${project.websiteLink}`} >
                                                            View Project
                                                            <Icon icon="ic:round-arrow-forward-ios" />
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )
                            }
                        </div>
                        <div className='you-can-contact'>
                            <h1 className='heading heading-3'>Feel free to Get in Touch</h1>
                            <p className='text-paragraph'>Do you want to book consultation? or contact me via email</p>
                            <div className='flex-container align-center gap-4'>
                                <div className='contact-me'>
                                    <Link to="mailto:obinnaukoofe@gmail.com">
                                        get in touch
                                    </Link>
                                </div>
                                <div className='contact-me'>
                                    <Link to="mailto:obinnaukoofe@gmail.com" className='bg-green'>
                                        schedule a consultation
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='link-to-page point-right'>
                            <div className='link-to-page__inner'>
                                <Link to="mailto:obinnaukoofe@gmail.com">
                                    <span>Consultation</span>
                                </Link>
                            </div>
                        </div>
                        <div className='link-to-page point-left'>
                            <div className='link-to-page__inner'>
                                <Link to="/">
                                    <span>About</span>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work;