import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

const Title = props => {
    return (
        <h1>{props.titleName}</h1>
    );
};

Title.propTypes = {
    titleName: PropTypes.string.isRequired
};

export default Title;