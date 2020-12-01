import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/home';
import './css/animate.css';
import './css/et-lineicons.css';
import './css/themify-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';

import './js/main.js';

function App() {
    return (
        <div id='home-page'>
            <a href='#' className='js-nav-toggle nav-toggle'>
                <i></i>
            </a>

            {/* Sidebar Section */}
            <aside id='aside'>
                {/* Logo */}
                <h1 id='logo'>
                    <img src='images/profile.jpg' alt='' />
                    <br />
                    <a href='index.html'>
                        Lonon F. Smith<span>Web Designer</span>
                    </a>
                </h1>
                {/* Menu */}
                <nav id='main-menu'>
                    <ul>
                        <li>
                            <a href='index.html'>Home</a>
                        </li>
                        <li>
                            <a href='resume.html'>Resume</a>
                        </li>
                        <li className='active'>
                            <a href='portfolio.html'>Portfolio</a>
                        </li>
                        <li>
                            <a href='services.html'>Services</a>
                        </li>
                        <li>
                            <a href='blog.html'>Blog</a>
                        </li>
                        <li>
                            <a href='contact.html'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            {/* Main Section */}
            <div id='main'>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
