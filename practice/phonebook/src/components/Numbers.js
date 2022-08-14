import Number from './Number'

const Numbers = ({ persons, searchString }) => {
  let outPersons
  if (searchString === '') {
    outPersons = persons
  } else {
    outPersons = persons.filter(({ name }) => name.toLowerCase().includes(searchString.toLowerCase()))
  }

  return (
    <div>
      {outPersons.map((person) => <Number person={person} key={person.id} />)}
    </div>
  )
}

export default Numbers