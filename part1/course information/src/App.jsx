import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header title={course.name}></Header>
      {course.parts.map((item) => {
        return (
          <>
            <Content content={item.name} />
            <Total total={item.exercises} />
          </>
        );
      })}

      <p>
        {/* Number of exercises
        {part1.exercises + part2.exercises + part3.exercises} */}
      </p>
    </div>
  );
};

export default App;
