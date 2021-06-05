import React from 'react'
const Header = ({name}) => {
  return(
    <h2>{name}</h2>
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
        <h3>Total of {sum} exercises</h3>
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

export default CourseInfo;
