import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import "./header.scss"
import { Link } from 'react-router-dom';


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
                            <li> <Link to="/work">Portfolio</Link></li>

                            <li>
                                <Link to="mailto:obinnaukoofe@gmail.com">Consulation</Link>
                            </li>
                            <li>
                                <Link>Download CV</Link>
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