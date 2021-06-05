import React, { useState, useRef } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas', number:'040-123456'}]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [searchName, setSearchName] = useState("");

    const focusName = useRef();

    const addPerson = (event) => {
        event.preventDefault();
        if (!(persons.find((person) => person.name === newName))) {
            const personObject = {
                name: newName,
                number: newNumber,
            };

            setPersons(persons.concat(personObject));
            setNewName("");
            setNewNumber("");
        } else {
            return alert(newName + " is already added to the phonebook");
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchName={searchName} setSearchName={setSearchName} />

            <h3>Add a new</h3>
            <PersonForm
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                addPerson={addPerson}
                focusName={focusName}
            />

            <h3>Numbers</h3>
            <Persons persons={persons} searchName={searchName} />
        </div>
    );
};

export default App;
