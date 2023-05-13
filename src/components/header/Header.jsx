import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import "./header.scss"
import { Link } from 'react-router-dom';


import cvPdf from "../../assets/obinna-uko-ofe-CV.pdf"

const Header = () => {
    const [overlayIsHidden, setOverlayIsHidden] = useState(false);

    const overlayHandler = (e) => {
        e.preventDefault();
        setOverlayIsHidden(prev => !prev)
    }

    return (
        <>

            {
                overlayIsHidden ? (<div className='overlay'>
                    <nav className='overlay-navs'>
                        <ul className='overlay-nav-list'>
                            <li>
                                <Link to="/">About</Link>

                            </li>
                            <li> <Link to="/portfolio">Portfolio</Link></li>

                            <li>
                                <Link to="mailto:obinnaukoofe@gmail.com">Consulation</Link>
                            </li>
                            <li>
                                <a href={cvPdf} download={"obinna-uko-ofe-CV"}>
                                    <Icon icon="academicons:cv" />
                                </a>
                            </li>
                            <li>
                                <Link to="mailto:obinnaukoofe@gmail.com">Contact</Link>
                            </li>
                        </ul>

                    </nav>

                    <div className='close-overlay'>
                        <button type='button' onClick={(e) => overlayHandler(e)}>
                            <Icon icon="iconamoon:close-bold" />
                        </button>
                    </div>
                </div>) : (<header className="portfolio-header">
                    <button type='button' onClick={overlayHandler}>
                        <Icon icon="ci:hamburger-lg" />
                    </button>
                </header>)
            }
        </>
    )
}

export default Header