import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import NavigationMenu from './components/NavigationMenu';
import './static/css/animate.css';
import './static/css/et-lineicons.css';
import './static/css/themify-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './static/css/main.css';
import './static/css/main.scss';

import './static/js/main.js';
import config from './config/config';
import Amplify from 'aws-amplify';

function App() {
    Amplify.configure({
        Auth: {
            ...config.cognito.Auth,
        },
        API: {
            ...config.cognito.API,
        },
    });

    return (
        <Router>
            <div id='home-page'>
                <NavigationMenu />
                {/* Main Section */}
                <div id='main'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-2'></div>
                            <div className='col-md-12 col-lg-8'>
                                <Routes />
                            </div>
                            <div className='col-lg-2'></div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
