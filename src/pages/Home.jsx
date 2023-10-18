import React from 'react';

import './Home.css';

import GameSwiper from '../components/GameSwiper';

function Home({ games }) {
    return (
        <section id="home" className='home'>
            <div className="container-fluid">
                <div className="row">
                    <GameSwiper />
                </div>
            </div>
        </section>
    );
};

export default Home;
