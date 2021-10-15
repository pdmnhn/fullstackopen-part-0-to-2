import React from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Content = ({ exercises }) => {
  return (
    <>
      {exercises.map((obj, index) => {
        return <Part key={index} part={obj.part} exercise={obj.exercise} />;
      })}
    </>
  );
};

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>;
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
        exercises={[
          { part: part1, exercise: exercises1 },
          { part: part2, exercise: exercises2 },
          { part: part3, exercise: exercises3 },
        ]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;