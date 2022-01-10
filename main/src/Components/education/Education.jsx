import React from 'react';
import './education.css';
import Loader from "../loader/Loader";

function Education() {

    const EducationArr = React.lazy(
        () =>
            new Promise (list => {
                setTimeout(() => {
                    list(import('./API/EducationAPI'))
                }, 5000)
            })
    )

    const SkillArr = React.lazy(
        () =>
            new Promise (list => {
                setTimeout(() => {
                    list(import('./API/SkillAPI'))
                }, 5000)
            })
    )

    return (
        <div className="education">
            <div className="education-item">
                <i className="fas fa-graduation-cap"> </i>

                <React.Suspense fallback = {<Loader />}>
                    <EducationArr />
                </React.Suspense>

            </div>

            <div className="education-item">
                <i className="fas fa-graduation-cap"> </i>

                <React.Suspense fallback = {<Loader />}>
                    <SkillArr />
                </React.Suspense>

            </div>
        </div>
    );
}

export default Education;