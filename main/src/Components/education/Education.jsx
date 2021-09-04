import React, { Component } from 'react';
import './education.css';

class Education extends Component {
    render() {
        return (
            <>
                <div className="education">
                    <div className="education-item">

                        <i className="fas fa-graduation-cap"></i>
                        <p>
                            ТулГУ,
                            <br/>
                            Институт прикладной математики и компьютерных наук.
                        </p>
                        <p>
                            кафедра: "Прикладная математика и информатика"
                        </p>
                        <p>
                            Диплом бакалавра - средний балл 4,02
                        </p>
                        <p>
                            Диплом магистра - средний балл 4,91
                            <br/>
                            (красный диплом)
                        </p>
                    </div>
                    <div className="education-item">
                        <i className="fas fa-graduation-cap"></i>
                        <p>
                            HTML
                        </p>
                        <p>
                            CSS/SASS
                        </p>
                        <p>
                            JavaScript
                        </p>
                        <p>
                            React
                        </p>
                        <p>
                            Selenium
                        </p>
                        <p>
                            C#
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Education;