import React, { Component } from 'react';
import './apps.css';
import WorkItem from "../work-item/work-item";
import Calc from "../work-item/img/Calc-on-iPhone-JS.svg"




class Apps extends Component {
    render() {
        return (

            <div className="Works">
                <WorkItem image={Calc}
                          title="SOS"
                          descr="Жанр: сайт игры"
                          layout="https://www.figma.com/file/tiZx1DOQI8uGgUjqG6w1Ag/SOS"
                          watch="https://andrushaa.github.io/Andrusha/figma/SOS/index.html"
                />
            </div>
        );
    }
}

export default Apps;