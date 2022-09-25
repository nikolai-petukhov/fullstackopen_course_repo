import { useState } from 'react'

const Button = ({ handlerClick, text }) => <button onClick={handlerClick}>{text}</button>;
const Anecdote = ({ anecdote }) => {
    return (
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdote}</p>
      </div>
    );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
    
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const maxPoints = Math.max(...points);

  const voteAnecdote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} />
      <Button handlerClick={voteAnecdote} text="vote" />
      <Button handlerClick={nextAnecdote} text="next anecdote" />
      <Anecdote anecdote={anecdotes[points.indexOf(maxPoints)]} />
      <p>has {maxPoints} votes</p>
    </div>
  );
}

export default App