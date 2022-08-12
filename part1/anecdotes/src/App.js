import { useState } from 'react'

const Button = ({name, onClick}) => <button onClick={onClick}>{name}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [data, setData] = useState({votes: Array(anecdotes.length).fill(0), most: 0})

  const randomSelect = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const increaseVote = () => {
    const newData = {...data}
    newData.votes[selected] += 1
    if (newData.votes[selected] > newData.votes[newData.most]) {
      newData.most = selected
    }
    setData(newData)
  }

  // let mostVotes = 0
  // for (let i = 0; i < anecdotes.length; i++) {
  //   if (votes[i] > votes[mostVotes]) mostVotes = i
  // }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {data.votes[selected]} votes</p>
      <Button name='vote' onClick={increaseVote} />
      <Button name='next anecdote' onClick={randomSelect} />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[data.most]}</p>
      <p>has {data.votes[data.most]} votes</p>
    </div>
  )
}

export default App