import React from 'react';
import './person.css';
import hamster from "./img/humster.jpg"

function Person() {
    return (
        <div className="person">
            <div className="person-item__img">
                <img
                    src={hamster}
                    alt="person"
                />
            </div>
            <div className="person-item__text">
                Ершов Андрей
            </div>
        </div>
    );
}

export default Person;