import { useState } from "react";

const Header = () => <h2>give feedback</h2>;

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad;
  const average = (good - bad) / all ;
  const percentOfPositive = good / all * 100;

  if (!good && !neutral && !bad) {
    return <p>No feedback given</p>
  }

  return ( 
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={percentOfPositive}/>
      </tbody>
    </table>
  );
}

const StatisticLine = ({ text, value }) => {
  if (text === 'positive') {
    return <tr><td>{text}</td><td>{value} %</td></tr>;
  }

  return <tr><td>{text}</td><td>{value}</td></tr>;
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);
  
  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
