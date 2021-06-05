import React from 'react'

const App = () => {
  const Header = ({name}) => {
    return(
      <div>
        <h2>{name}</h2>
      </div>
    )
  }
  const Part = ({part}) => {
    return(
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
  }
  const Total =  ({parts}) => {
    
    const sum = parts.reduce((s,p) => {
     
      s = s + p.exercises;
      return s
  },0)
    return (
      <div >
        <h3>  Total of {sum} exercises </h3>
      </div>
    )
  }
  const Content = ({parts}) => {
    return(
      <div>
    {parts.map((part) => <Part key={part.id} part={part}/>)}
    </div>
    )
  }
  const CourseInfo = ({course}) => {
    
    return (
      
      <div>
       <Header name={course.name} />
       <Content parts={course.parts}  />
      <Total parts={course.parts}/>
      
      
     
      </div>
      
    )
  }
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
                <CourseInfo key={course.id} course={course} />
            )}
    </div>
  )
}

export default App
