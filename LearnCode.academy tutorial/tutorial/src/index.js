import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './js/pages/Layout';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}/>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
