import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link}  from 'react-router-dom';
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