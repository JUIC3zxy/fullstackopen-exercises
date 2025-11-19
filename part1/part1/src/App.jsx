import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header title={course}></Header>
      <Content content={part1}></Content>
      <Total total={exercises1}></Total>
      <Content content={part2}></Content>
      <Total total={exercises2}></Total>
      <Content content={part3}></Content>
      <Total total={exercises3}></Total>

      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
