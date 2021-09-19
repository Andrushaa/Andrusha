import React from 'react';
import PropTypes from 'prop-types'
import './app-item.css';

const AppItem = props => {
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
                {props.subtitle}
            </div>
            <a href={props.watch} target="_blank" rel="noreferrer" className="app-watch">Смотреть</a>
        </div>
    );
};

AppItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    watch: PropTypes.string.isRequired,
};

export default AppItem;