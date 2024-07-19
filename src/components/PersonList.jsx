import React from "react";

const PersonList = ({ people }) => {
  return (
    <ul className="list-disc pl-5">
      {people.map((person, index) => (
        <li key={index} className="mb-2">
          <span className="font-bold">{person["University name"]}</span> -{" "}
          {person["Spoken language"]} - {person["Subject"]}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
