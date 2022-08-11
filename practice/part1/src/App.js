const Hello = (props) => {
  return (
    <div>      
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>  
  )
}
const App = () => {
  const name = 'Peter'
  const age = 26
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="George" age = {29 + 1}/>
      <Hello name="George" age = "29"/>
      <Hello name={name} age={age}/>
    </>
  )
}

export default App