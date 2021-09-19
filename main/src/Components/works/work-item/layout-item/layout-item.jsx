import React from 'react';
import PropTypes from 'prop-types';
import './layout-item.css';

const LayoutItem = props => {
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
                {props.subtitle}
            </div>
            <a href={props.layout} target="_blank" rel="noreferrer" className="work-layout">Макет</a>
            <a href={props.watch} target="_blank" rel="noreferrer" className="work-watch">Смотреть</a>
        </div>
    );
};

LayoutItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired,
    watch: PropTypes.string.isRequired,
};

export default LayoutItem;