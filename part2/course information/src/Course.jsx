export const Header = (props) => {
  return <h2>{props.title}</h2>;
};

export const Content = (props) => {
  return (
    <ul>
      {props.course.map((note) => (
        <Part key={note.id} name={note.name} exercises={note.exercises}></Part>
      ))}
    </ul>
  );
};
export const Part = (props) => {
  console.log(props.exercises);
  return (
    <li>
      {props.name} {props.exercises}
    </li>
  );
};

export const Course = ({ title, course, total }) => {
  return (
    <div>
      <Header title={title}></Header>
      <Content course={course}></Content>
      Total of {total === 0 ? 0 : total} exercises
    </div>
  );
};
