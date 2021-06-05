import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0,0]);
  const [hasVotes, setHasVotes] = useState(false);

  const incrementVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    setHasVotes(true);
  };

  const MostVoted = (props) => {
    return (
        <>
            <h1>Anecdote with Most Votes</h1>
            {!props.hasVotes && <>No anecdotes have been voted on yet.</>}
            {props.hasVotes && (
                <div>
                    <p>{props.anecdote}</p>
                    <p>has {props.votes} votes</p>
                </div>
            )}
        </>
    );
};

const maxVote = votes.reduce(
  (acc, num, idx) => {
      if (num > acc.num) {
          acc.num = num;
          acc.idx = idx;
      }

      return acc;
  },
  { num: 0 }
);

const maxVotedAnecdote = anecdotes[maxVote.idx];

  const handleClick = () => {
    setSelected(Math.ceil(Math.random() * anecdotes.length));
  };
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={incrementVote}>vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <MostVoted hasVotes={hasVotes} anecdote={maxVotedAnecdote} votes={maxVote.num}/>
    </div>
  )
}

export default App  
