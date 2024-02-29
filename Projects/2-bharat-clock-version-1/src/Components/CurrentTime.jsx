let CurrentTime = () => {
  let time = new Date();

  return (
    <p>
      This is the current time:{time.toLocaleDateString()} and time{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
