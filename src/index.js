import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';
import ServicePage from './components/servicePage';
import ReferencePage from './components/referencePage';
import ContactPage from './components/contactPage';

import './index.css';
import './assets/css/all.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/templatemo-style.css'; 




const routing = (
    <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/references" component={ReferencePage} />
        <Route path="/contact" component={ContactPage} />
    </Router>
)


ReactDOM.render(routing,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
