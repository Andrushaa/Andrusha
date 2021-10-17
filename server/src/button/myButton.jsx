import React from 'react';
import './myButton.css';

const MyButton = ({children, ...props}) => {
    return (
        <button className="MyButton" {...props}>
            {children}
        </button>
    );
};

export default MyButton;