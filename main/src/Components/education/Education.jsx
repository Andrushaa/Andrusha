import React from 'react';
import './education.css';
import {EducationArrAPI, SkillArrAPI} from "./API/API";

function Education() {
    return (
        <div className="education">
            <div className="education-item">
                <i className="fas fa-graduation-cap"> </i>
                {
                    <EducationArrAPI/>
                }
            </div>
            <div className="education-item">
                <i className="fas fa-graduation-cap"> </i>
                {
                    <SkillArrAPI/>
                }
            </div>
        </div>
    );
}

export default Education;