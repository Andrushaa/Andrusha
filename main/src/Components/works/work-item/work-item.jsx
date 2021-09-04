import React, {Component} from 'react';
import './work-item.css';
import SOS from "./img/SOS-layout.png";

class WorkItem extends Component {
    render() {
        return (
            <div className="work">
                <div className="work-img__wrapper">
                    <div className="work-img">
                        <img
                            src={SOS}
                            alt="logo"
                        />
                    </div>
                </div>

                <div className="work-title">
                    SOS
                </div>
                <div className="work-descr">
                    Жанр: сайт игры
                </div>
                <div className="work-layout">
                    <a href="#">Макет</a>
                </div>
                <div className="work-watch">
                    <a href="#">Смотреть</a>
                </div>
            </div>
        );
    }
}

export default WorkItem;