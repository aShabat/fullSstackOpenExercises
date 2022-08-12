import { useState } from 'react'

const H1 = ({ text }) => <h1>{text}</h1>

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>

const StatisticLine = ({ name, value }) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100 + '%'

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine name='good' value={good} />
        <StatisticLine name='neutral' value={neutral} />
        <StatisticLine name='bad' value={bad} />
        <StatisticLine name='all' value={all} />
        <StatisticLine name='average' value={average} />
        <StatisticLine name='positive' value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setTo = (setCounter, value) => () => setCounter(value)

  return (
    <div>
      <H1 text='give feedback' />
      <Button name='good' onClick={setTo(setGood, good + 1)} />
      <Button name='neutral' onClick={setTo(setNeutral, neutral + 1)} />
      <Button name='bad' onClick={setTo(setBad, bad + 1)} />

      <H1 text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App