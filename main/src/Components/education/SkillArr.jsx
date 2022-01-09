import React from 'react';
import {skillArr} from "./API/API";

function SkillArr() {
    return (
        skillArr.map(item => <p key={item.id}>
            {item.text}
        </p>)
    )
}

export default SkillArr;