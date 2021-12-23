import React from 'react';
import './education.css';
import {educationArr, SkillArr} from "./API/API";

function Education() {

    return (
        <div className="education">
            <div className="education-item">
                <i className="fas fa-graduation-cap"> </i>
                {
                    educationArr.map(item => <p key={item.id}>
                        {item.text}
                    </p>)
                }
            </div>

            <div className="education-item">
                <i className="fas fa-graduation-cap"> </i>
                {
                    SkillArr.map(item => <p key={item.id}>
                        {item.text}
                    </p>)
                }
            </div>
        </div>
    );
}

export default Education;