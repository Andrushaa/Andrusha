import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link}  from 'react-router-dom';
import Works from "./../Works";
import Apps from "./../apps/Apps";
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <Router>
                <div className="works-tabs">
                    <Link to="/layout"  className="works-tab">макеты</Link>
                    <Link to="/apps"  className="works-tab">приложения</Link>

                </div>
                <Route exact path="/layout" component={Works} />
                <Route path="/apps" component={Apps} />
            </Router>

        );
    }
}

export default Nav;