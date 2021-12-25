import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='w-100 bg-light text-center'>
                <p className='float-end'><NavLink to="#">Back to top</NavLink></p>
                <p>© 2021–2023 Tushar, Inc. ·</p>
            </footer>
        </>
    )
}

export default Footer;