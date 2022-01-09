import React from 'react';
import {educationArr} from "./API/API";

function EducationArr() {
    return (
        educationArr.map(item => <p key={item.id}>
            {item.text}
        </p>)
    )
}

export default EducationArr;