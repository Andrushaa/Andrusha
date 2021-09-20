import React, { Component } from 'react';
import './technologies.css';

const textArray = ['HTML', 'CSS', 'JavaScript', 'SASS', 'React'];

class Technologies extends Component {
    constructor() {
        super();
        this.state = { textId: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentId = this.state.textId;
            this.setState({ textId: currentId + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let textThatChanges = textArray[this.state.textId % textArray.length];

        return (
            <div className="technologies">
                <p>Используемые технологии <span>{textThatChanges}</span></p>
            </div>
        )
    }
}

export default Technologies;