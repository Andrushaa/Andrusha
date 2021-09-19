import React from 'react';
import './apps.css';
import AppItem from "../../work-item/app-item/app-item";
import imageCalc from "../../work-item/app-item/img/Calc-on-iPhone-JS.svg";

function Apps() {
    return (
        <div className="Works">
            <AppItem image={imageCalc}
                     title="Калькулятор"
                     subtitle="Калькулятор как в iPhone"
                     watch="https://andrushaa.github.io/Andrusha/app/Calc-on-iPhone-JS/index.html"
            />
        </div>
    );
}

export default Apps;