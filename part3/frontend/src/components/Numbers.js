import Number from './Number'

const Numbers = ({ persons, searchString, handleDeleteOf }) => {
  let outPersons
  if (searchString === '') {
    outPersons = persons
  } else {
    outPersons = persons.filter(({ name }) => name.toLowerCase().includes(searchString.toLowerCase()))
  }

  return (
    <div>
      {outPersons.map((person) => <Number person={person} handleDelete={handleDeleteOf(person.id)} key={person.id} />)}
    </div>
  )
}

export default Numbers