import React, {useState} from 'react';
const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}
const Statistics = (props) => {
    const all = props.good + props.worst + props.neutral
    const average = (props.good + (props.worst*-1))/all
    const positive = (props.good)/all *100
    if(all===0){
        return (
            <p>No feedbacks given</p>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                <Statistic text="good" value={props.good} />
                <Statistic text="neutral" value={props.neutral} />
                <Statistic text="worst" value={props.worst} />
                <Statistic text="all" value={all} />
                <Statistic text="average" value={average} />
                <Statistic text="positive" value={positive} />
                </tbody>
            </table>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [worst,setBad] = useState(0)
    return (
        <div>
            <h1>Please give your valuable feedback </h1>
            <div>
                <Button event={()=> setGood(good+1)} text="Good"/>
                <Button event={()=> setNeutral(neutral+1)} text="Neutral"/>
                <Button event={()=> setBad(bad+1)} text="Bad"/>                                
            </div>
            <h2>statistics</h2>
            <Statistics good={good} bad ={bad} neutral={neutral} />
        </div>
    )
}
export default App