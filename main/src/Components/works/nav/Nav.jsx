import React, {Component} from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="works-tabs">
                <div className="works-tab">
                    макеты
                </div>
                <div className="works-tab">
                    приложения
                </div>
            </div>
        );
    }
}

export default Nav;