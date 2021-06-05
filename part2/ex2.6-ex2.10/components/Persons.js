import React from "react";

const Persons = ({ persons, searchName }) => {
    return persons.length ? (
        <ul>
            {persons
                .filter((person) =>
                    person.name.toLowerCase().includes(searchName.toLowerCase())
                )
                .map((person) => (
                    <li key={person.name}>
                        {person.name} {person.number} &nbsp;
                    </li>
                ))}
        </ul>
    ) : (
        <p>Loading contacts...</p>
    );
};

export default Persons;
