import React from 'react';
import './app-item.css';

function AppItem(props) {
    return (
        <div className="app">
            <div className="app-img__wrapper">
                <div className="app-img">
                    <img
                        src={props.image}
                        alt="logo"
                    />
                </div>
            </div>

            <div className="app-title">
                {props.title}
            </div>
            <div className="app-type">
                {props.descr}
            </div>
            <a href={props.watch} target="_blank" rel="noreferrer" className="app-watch">Смотреть</a>
        </div>
    );
}

export default AppItem;