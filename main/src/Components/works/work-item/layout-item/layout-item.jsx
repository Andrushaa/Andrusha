import React from 'react';
import './layout-item.css';

function LayoutItem(props) {
    return (
        <div className="work">
            <div className="work-img__wrapper">
                <div className="work-img">
                    <img
                        src={props.image}
                        alt="logo"
                    />
                </div>
            </div>

            <div className="work-title">
                {props.title}
            </div>
            <div className="work-type">
                {props.descr}
            </div>
            <a href={props.layout} target="_blank" rel="noreferrer" className="work-layout">Макет</a>
            <a href={props.watch} target="_blank" rel="noreferrer" className="work-watch">Смотреть</a>
        </div>
    );
}

export default LayoutItem;