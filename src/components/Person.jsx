import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      I am {person.name}. I am {person.age} years old. I know {person.skill}
    </div>
  );
};

export default Person;
