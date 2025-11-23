import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td style={{ width: "100px", fontWeight: "bold" }}>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text="good" value={props.good}></StatisticsLine>
      <StatisticsLine text="neutral" value={props.neutral}></StatisticsLine>
      <StatisticsLine text="bad" value={props.bad}></StatisticsLine>
      <StatisticsLine text="average" value={props.average}></StatisticsLine>
      <StatisticsLine text="all" value={props.all}></StatisticsLine>
      <StatisticsLine
        text="positive"
        value={props.positive + "%"}
      ></StatisticsLine>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good"></Button>
        <Button
          handleClick={() => setNeutral(neutral + 1)}
          text="neutral"
        ></Button>
        <Button handleClick={() => setBad(bad + 1)} text="bad"></Button>
      </div>
      {all === 0 ? (
        <p>no feedback given</p>
      ) : (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          all={all}
          average={average}
          positive={positive}
        ></Statistics>
      )}
    </>
  );
};

export default App;
