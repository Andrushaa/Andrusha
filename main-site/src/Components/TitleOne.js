import React, { Component } from 'react';
import './person.css';
import hamster from "./img/humster.jpg"

class TitleOne extends Component {
    render() {
        return (
            <>
                <h1>Junior фронтенд разработчик</h1>
                <div className="person">
                    <div className="person-item__img">
                        <img 
                            src={hamster}
                            height="360"
                            width="360"
                            alt="person"
                        />
                    </div>
                    <div className="person-item__text">
                        Ершов Андрей
                    </div>
                </div>
            </>
        );
    }
}

export default TitleOne;