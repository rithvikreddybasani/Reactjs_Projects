import TestComponent from "./Components/TestComponent";

const App = () => {
  let ans = 0;

  return (
    <>
      <TestComponent>
        <p>I am child of parent</p>
      </TestComponent>
    </>
  );
};

export default App;
