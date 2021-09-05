import React from 'react';

import Person from "./person/Person";
import Education from "./education/Education";
import Title from "./title/Title";
import Nav from "./works/nav/Nav";

function Components() {
  return (
    <>
      <Title titleName="Junior фронтенд разработчик" />
      <Person />
      <Title titleName="Образование" />
      <Education />
      <Title titleName="Мои работы" />
      <Nav/>
    </>
  );
}

export default Components;
