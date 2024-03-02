const ButtonComp = ({ array, buttonPressed }) => {
  return (
    <div className="buttons-part">
      {array.map((individual) => (
        <button onClick={buttonPressed} value={individual}>
          {individual}
        </button>
      ))}
    </div>
  );
};

export default ButtonComp;
