import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <p>
        The course name is {course}
      </p>
      <p>
        The part1 name is {part1.name} and 
        The number of exercises in part1 are {part1.exercises}
      </p>
      <p>
        The part2 name is {part2.name} and 
        The number of exercises in part2 are {part2.exercises}
      </p>
      <p>
        The part3 name is {part3.name} and 
        The number of exercises in part3 are {part3.exercises}
      </p>
    </div>
  )
}
export default App
