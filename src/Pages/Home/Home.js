import React from 'react';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeMenus from '../HomeMenus/HomeMenus';

const Home = () => {
    return (
        <div className='bg-primary'>
            <HomeCarousel></HomeCarousel>
            <HomeMenus></HomeMenus>
        </div>
    );
};

export default Home;