import React, { Component } from 'react';
import './apps.css';
import WorkItem from "../work-item/work-item";
import Calc from "../work-item/img/Calc-on-iPhone-JS.svg"

class Apps extends Component {
    render() {
        return (

            <div className="Works">
                <WorkItem image={Calc}
                          title="Калькулятор"
                          descr="Калькулятор как в iPhone"
                          watch="https://andrushaa.github.io/Andrusha/app/Calc-on-iPhone-JS/index.html"
                />
            </div>
        );
    }
}

export default Apps;