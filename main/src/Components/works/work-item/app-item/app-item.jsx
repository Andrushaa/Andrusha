import React, { Component } from 'react';
import './app-item.css';

class AppItem extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-img__wrapper">
                    <div className="app-img">
                        <img
                            src={this.props.image}
                            alt="logo"
                        />
                    </div>
                </div>

                <div className="app-title">
                    {this.props.title}
                </div>
                <div className="app-type">
                    {this.props.descr}
                </div>
                <a href={this.props.watch} target="_blank" rel="noreferrer" className="app-watch">Смотреть</a>
            </div>
        );
    }
}

export default AppItem;