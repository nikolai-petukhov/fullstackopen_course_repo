import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from "./service/personsService";
import Notification from "./components/Notification";
import NotificationTypes from "./utils/NotificationTypes";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");
  const [message, setMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const personsToShow = searchString
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchString)
      )
    : persons;

  const addNumber = (event) => {
    event.preventDefault();
    const personForUpdate = persons.find((person) => person.name === newName);

    if (personForUpdate) {
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with new one?`
      ) && updatePerson(personForUpdate);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      personService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${returnedPerson.name}`);
        setNotificationType(NotificationTypes.SUCCESSFUL);
        setTimeout(() => {
          setMessage(null);
          setNotificationType(null);
        }, 5000);
      });
    }
  };

  const updatePerson = (person) => {
    const updatedPerson = { ...person, number: newNumber };

    personService
      .update(updatedPerson.id, updatedPerson)
      .then((returnedPerson) => {
        setPersons(
          persons.map((person) =>
            person.id !== returnedPerson.id ? person : returnedPerson
          )
        );
        setNewName("");
        setNewNumber("");
        setMessage(`Information of ${returnedPerson.name} has been updated`);
        setNotificationType(NotificationTypes.SUCCESSFUL);
        setTimeout(() => {
          setMessage(null);
          setNotificationType(null);
        }, 5000);
      });
  };

  const deletePersonHandler = (id) => {
    const personForDelete = persons.find((person) => person.id === id);

    window.confirm(`Delete ${personForDelete.name}?`) &&
      personService
        .remove(personForDelete.id)
        .then(() => setPersons(persons.filter((person) => person.id !== id)))
        .catch((error) => {
          setMessage(
            `Information of ${personForDelete.name} has already been removed from server`
          );
          setNotificationType(NotificationTypes.ERROR);
          console.log(error);
          setTimeout(() => {
            setMessage(null);
            setNotificationType(null);
            setPersons(persons.filter((person) => person.id !== id));
          }, 5000);
        });
  };

  const changeInputNameHandler = (event) => {
    setNewName(event.target.value);
  };

  const changeInputNumberHandler = (event) => {
    setNewNumber(event.target.value);
  };

  const changeInputSearchNameHandler = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notificationType={notificationType} message={message} />
      <Filter filterHandler={changeInputSearchNameHandler} />
      <h2>Add a new</h2>
      <PersonForm
        addNumber={addNumber}
        changeInputNameHandler={changeInputNameHandler}
        changeInputNumberHandler={changeInputNumberHandler}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} onDelete={deletePersonHandler} />
    </div>
  );
};

export default App;
