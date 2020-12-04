import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/home';
import About from './views/About';

export default function routes() {
    return (
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
        </Switch>
    );
}
