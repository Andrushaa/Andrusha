import React from 'react';
import './myInput.css'

const MyInput = (props) => {
    return (
        <input className="MyInput" {...props}/>
    );
};

export default MyInput;