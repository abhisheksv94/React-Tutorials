import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Submit from './Submit';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {NavLink} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const history=createBrowserHistory();

ReactDOM.render(
    <Router>
        <div>
            <div className="container">


                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href="">Love to Eat!</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li ><NavLink to="/" exact activeClassName='activeNav'>Home</NavLink></li>
                                <li><NavLink to="/submit" activeClassName='activeNav' history={history}>Submit a Recipe</NavLink></li>

                            </ul>

                        </div>
                    </div>
                </nav>
                <Route exact path='/' component={Home}/>
                <Route path='/submit'component={Submit}/>
            </div>

        </div>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
