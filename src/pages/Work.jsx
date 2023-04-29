import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import "./work.scss";
import itsolutionsImage from "../assets/itsolution-grap.png";
import enbeloImage from "../assets/enbelo-grap.png";
import bpImage from "../assets/bp-grap.png";
import fglcImage from "../assets/fglch-grap.png";
import safepayGrab from "../assets/safepay-grab.png";

import { Link } from 'react-router-dom';


const projects = [
    {
        projectName: "Enbelo",
        linkTo: "enbelo.com",
        imgSrc: `${enbeloImage}`,
        group: "website",
        tools: ["React", "CSS3", "Netlify", "Zoho"]
    },
    {
        projectName: "ITSolutions",
        linkTo: "itsolutions.app",
        imgSrc: `${itsolutionsImage}`,
        group: "web app",
        tools: ["Next JS", "Cloudfare", "REST APIs", "React Query"]
    },
    {
        projectName: "Francis Gilbert Law Chambers",
        linkTo: "francisgilbertlawchambers.com",
        imgSrc: `${fglcImage}`,
        group: "website",
        tools: ["React JS", "CSS3", "Netlify", "Zoho"]
    },
    {
        projectName: "Brand Protection",
        linkTo: "http://bp.trustedpartners.software/login",
        imgSrc: `${bpImage}`,
        group: "web app",
        tools: ["React", "TypeScript", "REST APIs", "Redux"]
    },
    {
        projectName: "Safe Pay",
        linkTo: "https://www.figma.com/proto/xgix5U8SF51FaOtYHEMVXt/SafePayPOS?page-id=76%3A50&node-id=225-367&viewport=-349%2C205%2C1&scaling=scale-down",
        imgSrc: `${safepayGrab}`,
        group: "ui/ux",
        tools: ["Figma"]
    },

]


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
            <header className="portfolio-header">
                <Icon icon="ci:hamburger-lg" />
            </header>
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
                        {/* <span>
                            <Icon icon="vscode-icons:file-type-node" />
                            Node JS
                            </span>
                            <span>
                            <Icon icon="devicon:mongodb" />
                                MongoDB
                            </span>
                            <span>
                            <Icon icon="devicon:javascript" />
                            PostgreSQL
                            </span> */}


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
                                                    <Link to={`//${project.linkTo}`}>
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
                                                        <Link to={`//${project.linkTo}`}>
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