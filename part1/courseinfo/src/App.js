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
  const { part1, part2, part3 } = props;
  return (
    <div>
      <Part data={part1} />
      <Part data={part2} />
      <Part data={part3} />
    </div>
  );
};

const Total = (props) => {
  const { exercisesCount } = props;
  return <p>Number of exercises {exercisesCount}</p>;
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = { name: "Fundamentals of React", exercises: 10 };
  const part2 = { name: "Using props to pass data", exercises: 7 };
  const part3 = { name: "State of a component", exercises: 14 };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total exercisesCount={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
