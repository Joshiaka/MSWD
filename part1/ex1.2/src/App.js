import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>Header</h1>
      <p>
        Hello the course name is {props.course}
      </p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        Hello the part name is {props.part} and number of exercises in it are {props.exercise}
      </p>
    </div>
  )
}
const Content =  (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <h2>Content</h2>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
      <Total  total={exercises1+exercises2+exercises3}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
        <h1>Total</h1>
        Hello the total number of exercises is {props.total}
      </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  return(
    <div>
      <Header course={course} />
      <Content />
    </div>
  )
}
export default App

