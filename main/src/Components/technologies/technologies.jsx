import React, { Component } from 'react';
import './technologies.css';

const textArray = ['HTML', 'CSS', 'JavaScript', 'SASS', 'React'];

class Technologies extends Component {
    constructor() {
        super();
        this.state = { textIdx: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            this.setState({ textIdx: currentIdx + 1 });
        }, 1000);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let textThatChanges = textArray[this.state.textIdx % textArray.length];

        return (
            <div className="technologies">
                <p>Используемые технологии <span>{textThatChanges}</span></p>
            </div>
        )
    }
}

export default Technologies;