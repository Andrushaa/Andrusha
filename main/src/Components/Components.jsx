import React from 'react';
import Person from "./person/Person";
import Education from "./education/Education";
import Nav from "./works/nav/Nav";
import SocialNetwork from "./social_network/Social_network";
import Wrapper from "./wrapper/Wrapper";

function Components() {
  return (
    <>
        <Wrapper titleName="Junior фронтенд разработчик">
            <Person />
        </Wrapper>
        <Wrapper titleName="Образование">
            <Education />
        </Wrapper>
        <Wrapper titleName="Мои работы">
            <Nav />
        </Wrapper>
        <SocialNetwork />
    </>
  );
}

export default Components;
