import React from 'react'
const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
} 
const Part = ({parts}) => {
  return (
    <div>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>
      <p>
        {parts[3].name} {parts[3].exercises}
      </p>
    </div>
  )
}
const Total = ({parts}) => {
  return (
    <div>
      <h3>
        total of {parts[0].exercises+parts[1].exercises+parts[2].exercises+parts[3].exercises} exercises
      </h3>
    </div>
  )
}
const Content = (props) => {
  const {parts} = props
  return (
    <div>
      <Part parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
const Course = ({course}) => {
  return(
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}
export default App
