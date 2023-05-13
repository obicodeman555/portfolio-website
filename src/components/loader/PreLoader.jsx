
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { createPortal } from 'react-dom';
const PreLoader = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 5000);

        return () => clearTimeout(timer)
    }, []);

    return (
        <>
            {

                isLoading && createPortal(
                    <Loader />,
                    document.body
                )
            }
        </>

    )
}

export default PreLoader