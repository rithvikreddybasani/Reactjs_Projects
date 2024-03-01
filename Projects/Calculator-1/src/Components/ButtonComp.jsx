const ButtonComp = ({ array }) => {
  return (
    <div className="buttons-part">
      {array.map((individual) => (
        <button>{individual}</button>
      ))}
    </div>
  );
};

export default ButtonComp;
