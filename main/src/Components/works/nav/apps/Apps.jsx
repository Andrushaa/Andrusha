import React, { Component } from 'react';
import './apps.css';
import AppItem from "../../work-item/app-item/app-item";
import imageCalc from "../../work-item/app-item/img/Calc-on-iPhone-JS.svg";

class Apps extends Component {
    render() {
        return (
            <div className="Works">
                <AppItem image={imageCalc}
                         title="Калькулятор"
                         descr="Калькулятор как в iPhone"
                         watch="https://andrushaa.github.io/Andrusha/app/Calc-on-iPhone-JS/index.html"
                />
            </div>
        );
    }
}

export default Apps;