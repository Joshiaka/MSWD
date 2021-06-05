import React, { useState } from 'react'
const Statistics = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          <h1>Statistics</h1>
          No feedback is given
        </div>
      )
    }
    return (
      <div>
         <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
      </div>
    )
  }
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
        setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }
  
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} all={good+bad+neutral} average={(good-bad)/(good+neutral+bad)} positive={(good/(good+bad+neutral))*100}/>
      </div>
    )
  }
export default App
