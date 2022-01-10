import React from 'react';

const SkillAPI = () => {
    const skillArr = [{
        id: 1,
        text: 'HTML'
    }, {
        id: 2,
        text: 'CSS'
    }, {
        id: 3,
        text: 'Javascript'
    }, {
        id: 4,
        text: 'SASS'
    }, {
        id: 5,
        text: 'React'
    }, {
        id: 6,
        text: 'Selenium'
    }, {
        id: 7,
        text: 'C#'
    }
    ]
    return (
        skillArr.map(item => <p key={item.id}>
            {item.text}
        </p>)
    );
};

export default SkillAPI;