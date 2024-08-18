import "./about.scss";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Header from "../components/header/Header";
import cvPdf from "../assets/obinna-uko-ofe-CV.pdf"


const About = () => {
    return (
        <main>
            <Header />
            <div className='ribbon'>
                <Link to={"//github.com/obicodeman555"} target="_blank">
                    follow on github
                </Link>
            </div>
            <article className='about-me__text'>
                <h1 className='heading heading-1'>
                    <span>Welcome,</span>&nbsp;
                    <span>My name is Obinna Ofe.</span>
                </h1>
                <div className='mt-2'>
                    <p className='text-paragraph'>
                        I am highly experienced software engineer with over 10 years of experience in the industry. Currently working at The Tonic Technologies as a Senior Frontend Developer and Technical Architect, Obinna Ofe has a passion for creating innovative and user-friendly applications using cutting-edge technology such as React & Redux.
                    </p>
                    <p className='text-paragraph'>
                       Throughout my career, I have worked on numerous projects across various industries, ranging from healthcare to finance.  When I am not
                       working, I like reading up on emerging technologies and strive to be an active member of the software community.
                    </p>

                    <p className='text-paragraph'>
                        Feel free to take a look at my latest projects on the &nbsp;
                        <Link to="/portfolio" className='about-link'>web portfolio page</Link>.
                    </p>
                </div>

                <div className='contact-me'>
                    <Link to="mailto:obinnaukoofe@gmail.com">
                        get in touch
                    </Link>
                </div>
            </article>

            <ul className='socials'>
                <li>
                    <Link to="//github.com/obicodeman555" target="_blank">
                        <Icon icon="pajamas:github" />
                    </Link>
                </li>
                <li>
                    <Link to="//linkedin.com/in/obinna-ofe-8b07a8124" target="_blank">
                        <Icon icon="jam:linkedin" />
                    </Link>
                </li>
                <li>
                    <a href={cvPdf} download={"obinna-uko-ofe-CV"}>
                        <Icon icon="academicons:cv" />
                    </a>
                </li>
            </ul>


            <div className='link-to-page point-right'>
                <div className='link-to-page__inner'>
                    <Link to="/portfolio">
                        <span>portfolio</span>
                    </Link>
                </div>
            </div>



        </main>
    )
}

export default About;