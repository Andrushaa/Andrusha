import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

function Title ({ titleName }) {
    return <h1> { titleName } </h1>
}

Title.propTypes = {
    titleName: PropTypes.string.isRequired
};

export default Title;