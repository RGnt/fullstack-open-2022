const Header = (props) => {
  const { course } = props;
  return <h1>{course}</h1>;
};

const Part = (props) => {
  const { title, exercisesCount } = props;
  return (
    <p>
      {title} {exercisesCount}
    </p>
  );
};

const Content = (props) => {
  const { part1, exercises1, part2, exercises2, part3, exercises3 } = props;
  return (
    <div>
      <Part title={part1} exercisesCount={exercises1} />
      <Part title={part2} exercisesCount={exercises2} />
      <Part title={part3} exercisesCount={exercises3} />
    </div>
  );
};

const Total = (props) => {
  const { exercisesCount } = props;
  return <p>Number of exercises {exercisesCount}</p>;
};
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
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total exercisesCount={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
