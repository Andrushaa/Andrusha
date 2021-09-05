import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Works from "./../Works";
import Apps from "./../apps/Apps";
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <Router>
                <div className="works-tabs">
                    <Link to="/"  className="works-tab">макеты</Link>
                    <Link to="/apps"  className="works-tab">приложения</Link>

                </div>
                <Switch>
                    <Route exact path="/" component={Works} />
                    <Route exact path="/apps" component={Apps} />
                </Switch>

            </Router>

        );
    }
}

export default Nav;