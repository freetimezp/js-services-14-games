import React from 'react';

import './Header.css';

import UserImg from '../images/user.jpg';

function Header({ toggleActive }) {
    return (
        <header>
            <a href="#" className="menu" onClick={toggleActive}>
                <i className="bi bi-sliders"></i>
            </a>

            <div className="userItems">
                <a href="#" className="icon">
                    <i className="bi bi-heart-fill"></i>
                    <span className="like">0</span>
                </a>
                <a href="#" className="icon">
                    <i className="bi bi-bag-fill"></i>
                    <span className="bag">0</span>
                </a>

                <div className="avatar">
                    <a href="#">
                        <img src={UserImg} alt="user" />
                    </a>
                    <div className="user">
                        <span>User Name</span>
                        <a href="#">View Profile</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
