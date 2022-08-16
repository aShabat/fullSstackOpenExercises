const AddPersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <button type='submit'>add</button>
  </form>
)

export default AddPersonForm