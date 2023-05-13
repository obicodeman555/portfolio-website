import React from 'react';
import "./loader.scss"
// import { useEffect } from 'react';

const Loader = () => {


    return (
        <div className='loading'>
            <div className="loader">
                <div className="square-1 square"></div>
                <div className="square-2 square"></div>
            </div>
        </div>
    )
}

export default Loader