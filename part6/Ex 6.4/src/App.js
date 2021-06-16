import React, { useState, useEffect } from 'react'

const App = (props) => {

  var anecdotes = props.store.getState()

  const vote = (id) => {
    props.store.dispatch({
      type: 'INCREMENT',
      id: id
    }) }

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    props.store.dispatch({
    	type: 'ADDITION',
    	content: content
    })
    event.target.note.value = ''
  }


    //console.log ("app.js - anecdotes: ", anecdotes)

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div><input name = "note" /></div>
        <button type = "submit">create</button>
      </form>
    </div>
  )

}

export default App