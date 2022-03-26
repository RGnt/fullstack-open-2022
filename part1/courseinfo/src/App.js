const Header = (props) => {
  const { course } = props;
  return <h1>{course}</h1>;
};

const Part = (props) => {
  const { name, exercises } = props.data;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      {parts.map((part) => (
        <p>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

const Total = (props) => {
  const { parts } = props;
  return (
    <p>
      Number of exercises{" "}
      {parts.reduce((prev, cur) => {
        return prev + cur.exercises;
      }, 0)}
    </p>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
