import React from 'react';

const EducationAPI = () => {
    const educationArr = [{
        id: 1,
        text: 'Институт прикладной математики и компьютерных наук.'
    }, {
        id: 2,
        text: 'кафедра: "Прикладная математика и информатика"'
    }, {
        id: 3,
        text: 'Диплом бакалавра - средний балл 4,02'
    }, {
        id: 4,
        text: 'Диплом магистра - средний балл 4,91 (красный диплом)'
    }
    ]
    return (
        educationArr.map(item => <p key={item.id}>
            {item.text}
        </p>)
    );
};

export default EducationAPI;