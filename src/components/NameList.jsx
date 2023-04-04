import React from "react";
import Person from "./Person";

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Bruce",
      age: 30,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
};

export default NameList;
