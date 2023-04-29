
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import "./about.scss";

const About = () => {
    return (
        <main>
            <header className="portfolio-header">
                <Icon icon="ci:hamburger-lg" />
            </header>
            <article className='about-me__text'>
                <h1>
                    <span>Good Morning,</span>
                    <span>My name is Obinna Ofe.</span>
                </h1>
                <p>
                    I, have been involved in the software industry for
                    over 5 years, developing a complex line of business applications in various sectors.

                </p>
                <p>
                    Furthermore, I have spent the last 5 years building single page applications using a wide range of
                    JavaScript technologies, including Angular, ReactJS, VueJS, and TypeScript.
                </p>
                <p>
                    Feel free to take a look at my latest projects on the &nbsp;
                    <Link to="/work" className='about-link'>web portfolio page</Link>.
                </p>

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

            <div className='github-follow'>
                <Link to={""}>
                    follow on github
                </Link>
            </div>
            <div className='link-to-page'>
                <div className='inner'>
                    <Link to="/work">
                        <span>portfolio</span>
                    </Link>
                </div>
            </div>



        </main>
    )
}

export default About;