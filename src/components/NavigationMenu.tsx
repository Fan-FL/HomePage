import React from 'react';
import { NavLink } from 'react-router-dom';

import profileImg from '../static/images/resume.jpg';

const NavigationMenu = () => {
    return (
        <>
            <a href='#' className='js-nav-toggle nav-toggle'>
                <i></i>
            </a>

            {/* Sidebar Section */}
            <aside id='aside'>
                {/* Logo */}
                <h1 id='logo'>
                    <img src={profileImg} alt='' />
                    <br />
                    <a href='index.html'>
                        Fan Li<span></span>
                    </a>
                </h1>
                {/* Menu */}
                <nav id='main-menu'>
                    <ul>
                        <li>
                            <NavLink exact to='/' activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to='/resume'
                                activeClassName='active'
                            >
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/about' activeClassName='active'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/test' activeClassName='active'>
                                Test
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to='/contact'
                                activeClassName='active'
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {/* Sidebar Footer */}
                <div className='footer'>
                    <ul>
                        <li>
                            <a href='mailto:funlee1314@gmail.com'>
                                <i className='ti-email font-14px gray-icon'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default NavigationMenu;
