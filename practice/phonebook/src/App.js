import { useState } from 'react'
import SearchForm from './components/SearchForm'
import AddPersonForm from './components/AddPersonForm'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567',
      id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (newName === '') {
      window.alert('Empty name input')
      return
    }
    if (newNumber === '') {
      window.alert('Empty number input')
      return
    }
    if (persons.findIndex(({ name }) => name === newName) !== -1) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    const newPeson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setNewName('')
    setNewNumber('')
    setPersons(persons.concat(newPeson))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchForm searchString={searchString} handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <AddPersonForm newName={newName} newNumber={newNumber} 
                     handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
                     onSubmit={addPerson} />
      <h2>Numbers</h2>
      <Numbers persons={persons} searchString={searchString} />
      {/* {persons
        .filter(searchString === '' 
          ? (person) => true
          : (person) => person.name.toLowerCase().includes(searchString.toLowerCase()))
        .map(person => <p key={person.id}>{person.name} {person.number}</p>)} */}
    </div>
  )
}

export default App