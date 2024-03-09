import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [timeState, setTimeState] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeState(new Date());
    }, 1000);
  }, []);

  return (
    <p>
      This is the current time:{timeState.toLocaleDateString()} and time{" "}
      {timeState.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
