import React, { useState } from "react";

const Button = ({ event, text }) => {
    return <button onClick={event}>{text}</button>;
};

const Statistic = ({ text, value}) => {
    return (
        <span>
            {text} {value}
        </span>
    );
};
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
    <p><Statistic text="good" value={props.good}/></p>
    <p><Statistic text="neutral" value={props.neutral}/></p>
    <p><Statistic text="bad" value={props.bad}/></p>
    <p><Statistic text="all" value={props.all}/></p>
    <p><Statistic text="average" value={props.average}/></p>
    <p><Statistic text="positive" value={props.positive}/>%</p>
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
        <Button event={handleGoodClick} text="good"/>
        <Button event={handleNeutralClick} text="neutral"/>
        <Button event={handleBadClick} text="bad"/>
        <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} all={good+bad+neutral} average={(good-bad)/(good+neutral+bad)} positive={(good/(good+bad+neutral))*100}/>
      </div>
    )
  }

export default App;
