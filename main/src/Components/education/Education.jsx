import React, { Component } from 'react';
import './education.css';

const educationArr = [{
        id: 1,
        text: 'Институт прикладной математики и компьютерных наук.'
    }, {
        id: 2,
        text: 'кафедра: "Прикладная математика и информатика"'
    }, {
        id: 3,
        text: 'Диплом бакалавра - средний балл 4,02'
    }, {
        id: 4,
        text: 'Диплом магистра - средний балл 4,91 (красный диплом)'
    }
]

const SkillArr = [{
        id: 1,
        text: 'HTML'
    }, {
        id: 2,
        text: 'CSS'
    }, {
        id: 3,
        text: 'Javascript'
    }, {
        id: 4,
        text: 'SASS'
    }, {
        id: 5,
        text: 'React'
    }, {
        id: 6,
        text: 'Selenium'
    }, {
        id: 7,
        text: 'C#'
    }
]

class Education extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default Education;