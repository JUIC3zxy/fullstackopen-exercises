import { useState } from "react";
import { useEffect } from "react";
import personService from "./services/person";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState("");
  let [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((initialPersons) => {
      console.log("promise fulfilled");
      setPersons(initialPersons);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id));
        })
        .catch(() => {
          alert(`the person '${person.name}' was already deleted from server`);
          setPersons(persons.filter((p) => p.id !== id));
        });
    }
  };
  const fileteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const addPerson = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      const person = persons.find((p) => p.name === newName);
      const id = person.id;
      if (
        window.confirm(`Name already exist. Do you want replace ${newName} ?`)
      ) {
        personService
          .update(id, { name: newName, number: newNumber })
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson,
              ),
            );
            setNewName("");
            setNewNumber("");
          });
      }
      return;
    }
    if (newNumber === "") {
      alert(`Number cannot be empty`);
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: `${persons.length + 1}`,
    };

    personService.create(personObject).then((response) => {
      setPersons(persons.concat(response));
      setNotification(response.name);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      setNewName("");
      setNewNumber("");
    });
  };
  return (
    <div>
      <h2>Filter</h2>
      <div>
        filter: <input value={filter} onChange={handleFilterChange} />
      </div>
      {showAlert && (
        <div className="alert">{notification} is added to the Phonebook</div>
      )}
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {fileteredPersons.map((person) => (
        <p key={person.id}>
          {person.name}:{person.number}{" "}
          <button type="delete" onClick={() => handleDelete(person.id)}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default App;
