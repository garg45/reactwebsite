import React from 'react';
import web from '../src/images/4img.jpg'
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common 
            name='Grow your buisness with' 
            imgsrc={web} 
            visit='/service' 
            btnname='Get Started'/>
        </>
    );
}

export default Home;