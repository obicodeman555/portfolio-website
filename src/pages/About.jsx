
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import "./about.scss";

const About = () => {
    return (
        <main>
            <header className="portfolio-header">
                <Icon icon="ci:hamburger-lg" />
            </header>
            <article>
                Obinna Ofe has been involved in the software industry for
                over 5 years, developing a complex line of business applications in various sectors.
                He has spent the last 5 years building single page applications using a wide range of
                JavaScript technologies, including Angular, ReactJS, and TypeScript.
            </article>

            <ul className='socials'>
                <li>
                    <Icon icon="pajamas:github" />
                </li>
                <li>
                    <Icon icon="jam:linkedin" />
                </li>
                <li>
                    <Icon icon="ic:baseline-email" />
                </li>
            </ul>

            <div>
                follow on github
            </div>
            <div className='link-to-page'>
                <Link to="#">portfolio</Link>
            </div>

            <div className='contact-me'>
                <Link to="#">
                    get in touch
                </Link>
            </div>

        </main>
    )
}

export default About;