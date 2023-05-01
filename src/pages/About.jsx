import "./about.scss";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Header from "../components/header/Header";



const About = () => {
    return (
        <main>
            <Header />
            <div className='ribbon'>
                <Link to={""}>
                    follow on github
                </Link>
            </div>
            <article className='about-me__text'>
                <h1 className='heading-1'>
                    <span>Welcome,</span>&nbsp;
                    <span>My name is Obinna Ofe.</span>
                </h1>
                <div className='mt-2'>
                    <p className='text-paragraph'>
                        I, have been involved in the software industry for
                        over 5 years, developing a complex line of business applications in various sectors.

                    </p>
                    <p className='text-paragraph'>
                        My expertise surrounds using a wide range of
                        JavaScript technologies, including Angular, ReactJS, VueJS, and TypeScript.
                    </p>
                    <p className='text-paragraph'>
                        Feel free to take a look at my latest projects on the &nbsp;
                        <Link to="/work" className='about-link'>web portfolio page</Link>.
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
                    <Link to="">
                        <Icon icon="pajamas:github" />
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <Icon icon="jam:linkedin" />
                    </Link>
                </li>
                <li>
                    <Link to="mailto:obinnaukoofe@gmail.com">
                        <Icon icon="ic:baseline-email" />
                    </Link>
                </li>
            </ul>


            <div className='link-to-page point-right'>
                <div className='link-to-page__inner'>
                    <Link to="/work">
                        <span>portfolio</span>
                    </Link>
                </div>
            </div>



        </main>
    )
}

export default About;