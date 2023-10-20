import React from 'react';

import './MyLibrary.css';

function MyLibrary({ games, reference }) {
    return (
        <section id="library" className='library' ref={reference}>
            <h1>MyLibrary</h1>
        </section>
    );
};

export default MyLibrary;
