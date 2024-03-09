import ClockSlogan from "./Components/ClockSlogan";
import Clockheading from "./Components/Clockheading";
import CurrentTime from "./Components/CurrentTime";

function App() {
  return (
    <center className="container">
      <Clockheading></Clockheading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
