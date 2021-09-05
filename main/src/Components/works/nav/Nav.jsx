import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link, BrowserRouter}  from 'react-router-dom';
import Works from "./../Works";
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <Router>
                <div className="works-tabs">
                    <Link to="/layout"  className="works-tab">макеты</Link>
                    <Link to="/apps"  className="works-tab">приложения</Link>
                    <Route exact path="/" component={Works} />
                    <Route path="/products" component={Works} />
                </div>
            </Router>

        );
    }
}

export default Nav;