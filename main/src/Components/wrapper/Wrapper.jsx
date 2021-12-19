import React from 'react';
import Title from "../title/Title";

const Wrapper = ({titleName, children}) => {
    return (
        <>
            <Title titleName={titleName}/>
            {children}
        </>
    );
};

export default Wrapper;